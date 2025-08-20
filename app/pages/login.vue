<script setup lang="ts">
import TextField from '~/components/reusable/typography/TextField.vue';
import Input from '~/components/reusable/input/InputField.vue';
import Button from '~/components/reusable/button/CustomButton.vue';
import { contactFormSchema } from '~/composables/validation';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import { ref } from 'vue';

definePageMeta({
  layout: 'auth',
});

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(contactFormSchema),
});

const rememberMe = ref(false);

const {
  value: email,
  errorMessage: emailError,
  handleBlur: emailBlur,
} = useField<string>('email');

const {
  value: password,
  errorMessage: passwordError,
  handleBlur: passwordBlur,
} = useField<string>('password');

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted:', values);
});
</script>

<template>
  <div class="min-h-screen overflow-hidden flex flex-col md:flex-row">

    <div class="w-full xl:w-1/2 h-screen flex items-center justify-center  px-6 xl:px-12">
      <div class="w-full max-w-xl flex flex-col gap-10">
        <div class="flex flex-col items-center text-center gap-6">
          <TextField
            textStyle="Body6xlBold"
            value="Log In"
            class="text-primary"
          />
          <TextField
            textStyle="BodyxlMedium"
            value="Authorized access to lead delivery, CRM sync, and performance insights."
            class="text-primary max-w-[496px] w-full"
          />
        </div>


        <div class="w-full flex flex-col gap-6">
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
            placeholder="Enter your Password"
          />

          <div class="flex items-center justify-between w-full">
            <label class="flex items-center gap-2 cursor-pointer text-base text-secondary">
              <input
                type="checkbox"
                class="w-5 h-5 text-primary border-secondary rounded focus:ring-primary hover:cursor-pointer"
                v-model="rememberMe"
              />
              Save login
            </label>

            <NuxtLink
              to="/forgot-password"
              class="text-sm text-primary"
            >
              Forgot password?
            </NuxtLink>
          </div>
        </div>


        <div class="w-full flex flex-col gap-4 items-center">
          <Button
            variant="primary"
            class="w-full"
            @click="onSubmit"
          >
            Log In
          </Button>

          <div class="w-full flex flex-row items-center justify-center gap-1">
            <p class="text-base font-normal text-secondary text-nowrap">
              Don't Have an Account?
            </p>
            <NuxtLink
              href="/sign-up"
              class="text-primary"
            >
              Sign Up
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>


    <div
      class="hidden xl:flex xl:w-1/2 h-screen bg-cover bg-center bg-[url('/images/login-desktop-bg.png')] relative items-center justify-center"
    >
      <NuxtImg
        src="/images/login-diagrams.png"
        alt="Dashboard Preview"
        class="w-[80%] h-auto object-contain"
      />
    </div>
  </div>
</template> 