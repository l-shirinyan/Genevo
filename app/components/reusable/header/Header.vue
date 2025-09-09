<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to=""
          leave="transition-opacity ease-linear duration-300"
          leave-from=""
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>
        <div class="fixed inset-0 flex justify-end">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel class="relative flex w-full max-w-xs flex-1 ml-auto">
              <div
                class="relative flex grow flex-col gap-y-22 overflow-y-auto bg-white px-9 py-15"
                :style="{
                  backgroundImage: `url('/images/sidebar-bg.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }"
              >
                <TransitionChild
                  as="template"
                  enter="ease-in-out duration-300"
                  enter-from="opacity-0"
                  enter-to=""
                  leave="ease-in-out duration-300"
                  leave-from=""
                  leave-to="opacity-0"
                >
                  <div class="flex h-16 shrink-0 items-center justify-between">
                    <NuxtLink to="/" @click="sidebarOpen = false">
                      <img :src="Logo" alt="Company Logo" />
                    </NuxtLink>
                    <button type="button" @click="sidebarOpen = false">
                      <XMarkIcon
                        aria-hidden="true"
                        class="size-6 text-gray-700 hover:cursor-pointer"
                      />
                    </button>
                  </div>
                </TransitionChild>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul
                        role="list"
                        class="flex flex-col items-start gap-12 space-y-1"
                      >
                        <li
                          v-for="item in navigation"
                          :key="item.name"
                          class="mb-0"
                        >
                          <NuxtLink
                            :to="item.href"
                            class="relative inline-block text-lg font-semibold no-underline text-primary group"
                            @click="sidebarOpen = false"
                          >
                            {{ item.name }}
                            <span
                              class="absolute left-0 bottom-0 h-0.5 w-full bg-primary hidden group-hover:block"
                            />
                          </NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li v-if="!hideLogin" class="mt-auto">
                      <NuxtLink to="/login">
                        <Button variant="primary" class="w-full">Login</Button>
                      </NuxtLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <div
      class="hidden lg:block sticky top-0 z-40 h-auto w-full bg-white px-5 py-3 shadow-xs lg:px-28 lg:py-7"
    >
      <div class="w-full flex items-center justify-between">
        <div>
          <NuxtLink to="/">
            <img
              :src="Logo"
              alt="Company Logo"
              width="24"
              height="24"
              class="w-full h-full"
            />
          </NuxtLink>
        </div>

        <button
          type="button"
          @click="openSidebar"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden hover:cursor-pointer"
        >
          <Bars3Icon aria-hidden="true" class="size-6" />
        </button>

        <nav class="hidden lg:flex items-center gap-10">
          <li
            v-for="{ name, href } in navigation"
            :key="name"
            class="list-none"
          >
            <NuxtLink
              :to="href"
              class="relative inline-block text-base font-semibold text-primary group"
            >
              {{ name }}
              <span
                class="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"
              />
            </NuxtLink>
          </li>
        </nav>
        <div>
          <NuxtLink v-if="!hideLogin" to="/login" class="hidden lg:block">
            <Button variant="primary" class="hidden lg:block">Login</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="sticky top-0 z-40 flex justify-between items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden"
    >
      <div>
        <NuxtLink to="/">
          <img
            :src="Logo"
            alt="Company Logo"
            width="24"
            height="24"
            class="w-full h-full"
          />
        </NuxtLink>
      </div>
      <button
        type="button"
        class="-m-2.5 text-gray-700 hover:text-gray-900 hover:cursor-pointer lg:hiddene"
        @click="sidebarOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="size-6" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import Logo from "/images/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import Button from "@/components/reusable/button/CustomButton.vue";
import { navigation } from "@/constants/data";
import { getUser } from "~/composables/api/user";

const sidebarOpen = ref(false);
const user = await getUser();
const token = useCookie("token");
const route = useRoute();
const hideLogin = computed(
  () => token.value?.length || route.path === "/login" || route.path === "/sign-up"
);
</script>
