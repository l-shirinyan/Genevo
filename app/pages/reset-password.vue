<script setup lang="ts">
import TextField from "~/components/reusable/typography/TextField.vue";
import Input from "~/components/reusable/input/InputField.vue";
import Button from "~/components/reusable/button/CustomButton.vue";
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { resetPassword } from "~/composables/api/forgot-password";
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
const route = useRoute();
const router = useRouter();
const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(resetPasswordFormSchema),
});
const token = computed(() => route.query.token);
const email = computed(() => route.query.email);
const isModalOpen = ref(false);
const closeModal = () => {
  isModalOpen.value = false;
  router.push('/login')
};
const openModal = () => {
  isModalOpen.value = true;
};

const {
  value: password,
  errorMessage: passwordError,
  handleBlur: passwordBlur,
} = useField<string>("password");
const {
  value: confirmPassword,
  errorMessage: confirmPasswordError,
  handleBlur: confirmPasswordBlur,
} = useField<string>("confirmPassword");

const onSubmit = handleSubmit(async (values) => {
  try {
    if (!token.value || !email.value) {
      toast.error({
        title: "Don’t valid url",
        message: "Please try again.",
      });
      return;
    }

    const payload = {
      password: values.password,
      password_confirmation: values.confirmPassword,
      token: token.value.toString(),
      email: email.value.toString(),
    };

    const response = await resetPassword(payload);
    if (response) {
      openModal();
    }
  } catch (error: any) {
    toast.error({
      title: "Login Failed",
      message: "Please try again.",
    });
    console.error("[FORM] Login failed:", error);
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
            value="Reset Password"
            class="text-primary"
          />
          <TextField
            textStyle="BodyxlMedium"
            value="Enter and confirm your new password to secure your account."
            class="text-primary max-w-[496px] w-full"
          />
        </div>

        <form class="w-full flex flex-col gap-6" @submit.prevent="onSubmit">
          <Input
            label="Set New Password"
            input-id="password"
            v-model="password"
            @blur="passwordBlur"
            :error="passwordError"
            type="password"
            placeholder="Enter New Password"
          />
          <div class="flex flex-col gap-1.5">
            <Input
              label="Confirm Password"
              input-id="confirmpassword"
              v-model="confirmPassword"
              @blur="confirmPasswordBlur"
              :error="confirmPasswordError"
              type="password"
              placeholder="Re-enter new password"
            />
            <div class="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#7996AD"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
              <p class="text-sm text-[#7996AD]">
                Enter at least 10 characters, 1 uppearcase , 1 number and 1
                special character
              </p>
            </div>
          </div>
          <div class="w-full flex flex-col gap-4 items-center">
            <Button variant="primary" class="w-full" type="submit">
              Reset Password
            </Button>
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
              class="relative w-full max-w-[450px] max-h-full transform rounded-xl bg-white p-8 md:p-12 text-left shadow-xl transition-all overflow-auto"
            >
              <button
                type="button"
                @click="closeModal()"
                class="absolute right-2 top-2 rounded-full p-1 text-black hover:text-gray-700"
              >
                <XMarkIcon class="w-6 h-6" />
              </button>
              <div class="flex flex-col">
                <p class="text-center text-[#2B2B2B] font-bold text-4xl">
                  Success!
                </p>
                <p
                  class="text-secondary text-center font-semibold text-xl mt-7"
                >
                  Your password has been reset successfully. Please log in with
                  your new password.
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
                    Log In
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
