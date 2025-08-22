<script setup lang="ts">
import TextField from '~/components/reusable/typography/TextField.vue'
import Input from '~/components/reusable/input/InputField.vue'
import Textarea from '~/components/reusable/input/Textarea.vue'
import Button from '~/components/reusable/button/CustomButton.vue'
import { contactFormSchema } from '~/composables/validation'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'

const { handleSubmit, meta, isSubmitting } = useForm({
  validationSchema: toTypedSchema(contactFormSchema),
})

const {
  value: firstName,
  errorMessage: firstNameError,
  handleBlur: firstNameBlur,
} = useField<string>('firstName')

const {
  value: lastName,
  errorMessage: lastNameError,
  handleBlur: lastNameBlur,
} = useField<string>('lastName')

const {
  value: email,
  errorMessage: emailError,
  handleBlur: emailBlur,
} = useField<string>('email')

const {
  value: message,
  errorMessage: messageError,
  handleBlur: messageBlur,
} = useField<string>('message')

const onSubmit = handleSubmit(values => {
  console.log('Form submitted:', values)
})
</script>

<template>
  <div
    class="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-8 mb-24 px-5 lg:px-20 py-30 bg-[url('/images/contact-mob-bg.png')]    
    md:bg-[url('/images/contact-tablet-bg.png')] 
    lg:bg-[url('/images/contact-bg.png')]       
    bg-cover bg-center"
  >
    <div
      class="flex flex-col items-center text-center gap-8 lg:text-start lg:items-start lg:gap-16"
    >
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
      class="w-full max-w-[658px] flex flex-col p-4 gap-4 md:p-6 md:gap-8 rounded-4xl" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    >
      <div class="flex flex-col items-start gap-4 lg:gap-6">
        <div
          class="w-full flex flex-col items-start gap-4 lg:flex-row lg:gap-3"
        >
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

  <div
    class="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:items-center lg:gap-21 px-5 lg:px-30 py-25 bg-[url('/images/contact-map-mob-bg.png')]    
    md:bg-[url('/images/contact-tablet-bg.png')] 
    lg:bg-[url('/images/contact-map-bg.png')]       
    bg-cover bg-center"
  >
    <div class="max-w-[658px] lg:max-w-[689px] w-full flex flex-col items-center gap-8">
      <div class="w-full rounded-4xl overflow-hidden" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
        <iframe
          class="w-full h-[400px] rounded-4xl border-0"
          src="https://www.google.com/maps?q=Philadelphia,USA&output=embed"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <!--
      <div class="max-w-[689px] w-full">
        <GMapMap
          :center="{ lat: 37.42216, lng: -122.08427 }"
          :zoom="15"
          class="w-full h-[400px] rounded-4xl"
        >
          <GMapMarker :position="{ lat: 37.42216, lng: -122.08427 }" />
        </GMapMap>
      </div>
      -->

      <Button variant="primary" class="w-full block lg:hidden">
        Show On Map
      </Button>
    </div>

    <div class="w-full max-w-[500px] flex flex-col items-start gap-16">
      <div
        class="flex flex-col items-center gap-6 text-center lg:items-start lg:text-start"
      >
        <TextField
          textStyle="Body6xlBold"
          value="Our Global Reach"
          class="text-primary"
        />
        <TextField
          textStyle="BodyxlMedium"
          value="Trusted by teams around the world — from the U.S. to South Korea — we deliver results that drive real growth. See where we’ve made an impact."
          class="text-primary w-full"
        />
      </div>
      <Button variant="primary" class="w-full hidden lg:block">
        Show On Map
      </Button>
    </div>
  </div>
</template>