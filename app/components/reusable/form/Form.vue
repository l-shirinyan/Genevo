<script setup lang="ts">
import TextField from '~/components/reusable/typography/TextField.vue'
import Input from '~/components/reusable/input/InputField.vue'
import Textarea from '~/components/reusable/input/Textarea.vue'
import Button from '~/components/reusable/button/CustomButton.vue'
import { contactFormSchema } from '~/composables/validation'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
// :white_check_mark: allow overrides with defaults
interface Props {
  mobileBg?: string
  tabletBg?: string
  desktopBg?: string
}
const props = withDefaults(defineProps<Props>(), {
  mobileBg: "/images/contact-mob-bg.png",
  tabletBg: "/images/contact-tablet-bg.png",
  desktopBg: "/images/contact-bg.png",
})
const { handleSubmit, meta, isSubmitting } = useForm({
  validationSchema: toTypedSchema(contactFormSchema),
})
const { value: firstName, errorMessage: firstNameError, handleBlur: firstNameBlur } = useField<string>('firstName')
const { value: lastName, errorMessage: lastNameError, handleBlur: lastNameBlur } = useField<string>('lastName')
const { value: email, errorMessage: emailError, handleBlur: emailBlur } = useField<string>('email')
const { value: message, errorMessage: messageError, handleBlur: messageBlur } = useField<string>('message')
const onSubmit = handleSubmit(values => {
  console.log('Form submitted:', values)
})
</script>
<template>
  <div
    class="contact-form flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-8 mb-24 px-5 lg:px-20 py-30 bg-cover bg-center"
    :style="{
      '--bg-mobile': `url(${props.mobileBg})`,
      '--bg-tablet': `url(${props.tabletBg})`,
      '--bg-desktop': `url(${props.desktopBg})`
    }"
  >
    <div class="flex flex-col items-center text-center gap-8 lg:text-start lg:items-start lg:gap-16">
      <TextField
        textStyle="Body6xlBold"
        value="Let’s Grow Together"
        class="text-primary"
      />
      <TextField
        textStyle="BodyxlMedium"
        value="We’re here to help you hit your goals — whether you're a startup, a professional, or an enterprise team scaling your pipeline."
        class="text-primary max-w-[590px] w-full"
      />
    </div>
    <div
      class="w-full max-w-[658px] flex flex-col p-4 gap-4 md:p-6 md:gap-8 rounded-4xl"
      style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    >
      <div class="flex flex-col items-start gap-4 lg:gap-6">
        <div class="w-full flex flex-col items-start gap-4 lg:flex-row lg:gap-3">
          <Input
            label="First Name"
            input-id="first-name"
            v-model="firstName"
            @blur="firstNameBlur"
            :error="firstNameError"
            placeholder="Enter your First Name"
          />
          <Input
            label="Last Name"
            input-id="last-name"
            v-model="lastName"
            @blur="lastNameBlur"
            :error="lastNameError"
            placeholder="Enter your Last Name"
          />
        </div>
        <Input
          label="Email"
          input-id="email"
          v-model="email"
          @blur="emailBlur"
          :error="emailError"
          type="email"
          placeholder="Enter your email"
        />
        <Textarea
          label="Message"
          input-id="message"
          v-model="message"
          @blur="messageBlur"
          :error="messageError"
          placeholder="Enter Your Message"
        />
      </div>
      <Button
        variant="primary"
        class="w-full"
        @click="onSubmit"
        :disabled="!meta.valid || isSubmitting"
        :class="{
          'opacity-35 cursor-not-allowed': !meta.valid || isSubmitting,
          'w-full': true,
        }"
      >
        Submit
      </Button>
    </div>
  </div>
</template>
<style scoped>
.contact-form {
  background-image: var(--bg-mobile);
}
@media (min-width: 768px) {
  .contact-form {
    background-image: var(--bg-tablet);
  }
}
@media (min-width: 1024px) {
  .contact-form {
    background-image: var(--bg-desktop);
  }
}
</style>