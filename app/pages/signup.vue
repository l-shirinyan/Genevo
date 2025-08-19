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
  value: fullName,
  errorMessage: fullNameError,
  handleBlur: fullNameBlur,
} = useField<string>('fullName');

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
  <div class="md:max-w-[700px] w-full flex flex-col items-center gap-12 py-16 px-5 mx-auto">
    <div class="flex flex-col items-center text-center gap-6">
      <TextField
        textStyle="Body6xlBold"
        value="Create Your Account"
        class="text-primary"
      />
      <TextField
        textStyle="BodyxlMedium"
        value="Generate leads, run campaigns, and manage outreach,all in one dashboard."
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

      <div class="w-full">
        <label class="flex items-center gap-2 cursor-pointer text-base text-secondary">
          <input
            type="checkbox"
            class="w-5 h-5 text-primary border-secondary rounded focus:ring-primary hover:cursor-pointer"
            v-model="rememberMe"
          />
            I agree to receive SMS messages from VIP Services.
        </label>
      </div>
    </div>

    <div class="w-full flex flex-col gap-4 items-center">
      <Button
        variant="primary"
        class="w-full"
        @click="onSubmit"
      >
        Sign Up
      </Button>

      <div class="w-full flex flex-row items-center justify-center gap-1">
        <p class="text-base font-normal text-secondary text-nowrap">
          AlreadyHave an Account? 
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
</template>