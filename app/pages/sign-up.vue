<script setup lang="ts">
import TextField from '~/components/reusable/typography/TextField.vue';
import Input from '~/components/reusable/input/InputField.vue';
import PhoneField from '~/components/reusable/input/PhoneField.vue';
import Button from '~/components/reusable/button/CustomButton.vue';
import { signupFormSchema } from '~/composables/signupvalidation';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import { ref, watch } from 'vue';
import { registerUser, type RegisterPayload } from '~/composables/api/register';

definePageMeta({
  layout: 'auth',
});

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(signupFormSchema),
});

watch(() => errors.value, () => {
  console.log(errors.value);
});

const { value: fullName, errorMessage: fullNameError, handleBlur: fullNameBlur } = useField<string>('fullName');
const { value: email, errorMessage: emailError, handleBlur: emailBlur } = useField<string>('email');
const { value: password, errorMessage: passwordError, handleBlur: passwordBlur } = useField<string>('password');
const phone = ref('');
const smsOptIn = ref(true);
const termsAccepted = ref(false);
const referralCode = ref<string | null>(null);

const loading = ref(false);
const error = ref('');

const onSubmit = handleSubmit(async (values) => {
  error.value = '';
  loading.value = true;

  const payload: RegisterPayload = {
    name: values.fullName,
    email: values.email,
    password: values.password,
    password_confirmation: values.password, 
    terms: termsAccepted.value,
    sms_opt_in: smsOptIn.value,
    phone: phone.value,
    referral_code: referralCode.value,
  };

  try {
    console.log('[SIGNUP] Sending payload:', payload);
    const response = await registerUser(payload);

    if (response.success) {
      console.log('[SIGNUP] Registration successful:', response.data);
    } else {
      error.value = response.message || 'Registration failed';
      console.error('[SIGNUP] Registration error:', response.message);
    }
  } catch (err: any) {
    error.value = err?.data?.message || err.message || 'Registration failed';
    console.error('[SIGNUP] API error:', err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="min-h-screen flex flex-col md:flex-row overflow-x-hidden">
    <!-- Left Form Section -->
    <div class="w-full xl:w-1/2 min-h-screen overflow-y-auto flex items-center justify-center px-6 xl:px-12">
      <div class="md:max-w-[700px] w-full flex flex-col items-center gap-12 py-16 px-5 mx-auto">
        <div class="flex flex-col items-center text-center gap-6">
          <TextField
            textStyle="Body6xlBold"
            value="Create Your Account"
            class="text-primary"
          />
          <TextField
            textStyle="BodyxlMedium"
            value="Generate leads, run campaigns, and manage outreach, all in one dashboard."
            class="text-primary max-w-[496px] w-full"
          />
        </div>

        <div class="w-full flex flex-1 flex-col gap-6">
          <Input
            label="Full Name"
            input-id="fullName"
            v-model="fullName"
            @blur="fullNameBlur"
            :error="fullNameError"
            type="text"
            placeholder="Enter your Full Name"
          />
          <Input
            label="Email"
            input-id="email"
            v-model="email"
            @blur="emailBlur"
            :error="emailError"
            type="email"
            placeholder="Enter your Email"
          />
          <Input
            label="Password"
            input-id="password"
            v-model="password"
            @blur="passwordBlur"
            :error="passwordError"
            type="password"
            placeholder="Create Password"
          />
          <Input
            label="Confirm Password"
            input-id="confirmpassword"
            v-model="password"
            @blur="passwordBlur"
            :error="passwordError"
            type="password"
            placeholder="Confirm Password"
          />
          <PhoneField v-model="phone" />

          <div class="w-full">
            <label class="flex items-center gap-2 cursor-pointer text-base text-secondary">
              <input
                type="checkbox"
                class="w-5 h-5 text-primary border-secondary rounded focus:ring-primary hover:cursor-pointer checked:bg-primary checked:border-primary"
                v-model="smsOptIn"
              />
              I agree to receive SMS messages from VIP Services.
            </label>
          </div>

          <div class="w-full">
            <label class="flex items-center gap-2 cursor-pointer text-base text-secondary">
              <input
                type="checkbox"
                class="w-5 h-5 text-primary border-secondary rounded focus:ring-primary hover:cursor-pointer checked:bg-primary checked:border-primary"
                v-model="termsAccepted"
              />
              I agree to the Terms and Conditions.
            </label>
          </div>
        </div>

        <div class="w-full flex flex-col gap-4 items-center">
          <Button
            variant="primary"
            class="w-full"
            @click="onSubmit"
            :disabled="loading"
          >
            Sign Up
          </Button>

          <div class="w-full flex flex-row items-center justify-center gap-1">
            <p class="text-base font-normal text-secondary text-nowrap">
              Already Have an Account?
            </p>
            <NuxtLink
              href="/login"
              class="text-primary"
            >
              Log In
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Image Section -->
    <div
      class="hidden xl:flex xl:w-1/2 min-h-screen bg-cover bg-center bg-[url('/images/login-desktop-bg.png')] relative items-center justify-center"
    >
      <NuxtImg
        src="/images/MacBook-Pro.png"
        alt="Dashboard Preview"
        class="w-full h-auto relative left-[25%] scale-[1.9] object-contain"
      />
    </div>
  </div>
</template>
