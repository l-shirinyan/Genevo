<script setup lang="ts">
import TextField from "~/components/reusable/typography/TextField.vue";
import Input from "~/components/reusable/input/InputField.vue";
import Button from "~/components/reusable/button/CustomButton.vue";
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { ref } from "vue";
import { forgotPassword } from "~/composables/api/forgot-password";
import {
  Dialog,
  DialogOverlay,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

definePageMeta({
  layout: "auth",
});

const toast = useToast();
const isModalOpen = ref(false);
const closeModal = () => {
  isModalOpen.value = false;
};
const modalTitle = ref("Email Sent");
const modalSubTitle = ref(
  "If an account exists with this email, we’ve sent a reset link."
);

const openModal = () => {
  isModalOpen.value = true;
};
const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(forgotPasswordFormSchema),
});

const {
  value: email,
  errorMessage: emailError,
  handleBlur: emailBlur,
} = useField<string>("email");

const onSubmit = handleSubmit(async (values) => {
  try {
    const payload = {
      email: values.email,
    };

    const response = await forgotPassword(payload);
    if (response) {
      openModal();
    }
  } catch (error: any) {
    modalTitle.value = "No Account Found";
    modalSubTitle.value =
      "We couldn’t find an account registered with this email address.";
    openModal();
  }
});
</script>

<template>
  <div class="min-h-screen overflow-hidden flex flex-col md:flex-row">
    <div
      class="w-full xl:w-1/2 h-screen flex items-center xl:bg-white justify-center px-6 xl:px-12"
    >
      <div class="w-full max-w-xl flex flex-col gap-10">
        <div class="flex flex-col items-center text-center gap-6">
          <TextField
            textStyle="Body6xlBold"
            value="Forgot Password"
            class="text-primary"
          />
          <TextField
            textStyle="BodyxlMedium"
            value="Enter your email and we’ll send you a link to reset your password."
            class="text-primary max-w-[496px] w-full"
          />
        </div>

        <form class="w-full flex flex-col gap-6" @submit.prevent="onSubmit">
          <Input
            label="Email"
            input-id="email"
            v-model="email"
            @blur="emailBlur"
            :error="emailError"
            type="email"
            placeholder="jackadams@gmail.com"
          />
          <div class="w-full flex flex-col gap-4 items-center">
            <Button variant="primary" class="w-full" type="submit">
              Send Reset Link
            </Button>

            <div class="w-full flex flex-row items-center justify-center gap-1">
              <p class="text-base font-normal text-secondary text-nowrap">
                Don’t Have an Account?
              </p>
              <NuxtLink href="/sign-up" class="text-primary">
                Sign Up
              </NuxtLink>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div
      class="hidden xl:flex xl:w-1/2 h-screen bg-cover bg-center bg-[url('/images/login-desktop-bg.png')] relative items-center justify-center"
    >
      <NuxtImg
        src="/images/login-diagrams.png"
        alt="Dashboard Preview"
        class="w-[80%] h-auto object-cover"
      />
    </div>
    <TransitionRoot as="template" :show="isModalOpen">
      <Dialog as="div" class="relative z-50" @close="closeModal">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-black/50 transition-opacity" />
        </TransitionChild>

        <div
          class="fixed inset-0 z-50 flex items-center justify-center p-6 md:px-[120px] lg:p-4"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative w-full lg:max-w-[450px] max-h-full transform rounded-xl bg-white p-8 md:p-12 text-left shadow-xl transition-all overflow-auto"
            >
              <button
                type="button"
                @click="closeModal"
                class="absolute right-2 top-2 rounded-full p-1 text-black hover:text-gray-700"
              >
                <XMarkIcon class="w-6 h-6" />
              </button>
              <div class="flex flex-col">
                <p class="text-center text-[#2B2B2B] font-bold text-4xl">
                  {{ modalTitle }}
                </p>
                <p
                  class="text-secondary text-center font-semibold text-xl mt-7"
                >
                  {{ modalSubTitle }}
                </p>
                <Button
                  variant="primary"
                  class="w-full mt-10 !p-0 flex"
                  type="submit"
                >
                  <NuxtLink
                    to="/login"
                    class="text-white text-center w-full font-medium text-xl p-2"
                  >
                    Back to Log In
                  </NuxtLink>
                </Button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
