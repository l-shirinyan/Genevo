<script setup>
import { ref } from "vue";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import Logo from "/images/logo.png";
import { navigation } from "@/constants/data";
import Button from "@/components/reusable/button/CustomButton.vue";

const sidebarOpen = ref(false);

function openSidebar() {
  console.log("Button clicked!");
  sidebarOpen.value = true;
  console.log(sidebarOpen.value);
}
</script>

<template>
  <div>
    <!-- Mobile Sidebar -->
    <Dialog
      :open="sidebarOpen"
      @close="sidebarOpen = false"
      class="relative z-50 lg:hidden"
    >
      <!-- Backdrop -->
      <DialogBackdrop
        class="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear"
      />

      <!-- Sidebar Panel -->
      <div class="fixed inset-0 flex justify-end">
        <DialogPanel
          class="relative flex w-full md:max-w-xs flex-1 transform transition duration-300 ease-in-out mt-[54px]"
        >
          <!-- Sidebar content -->
          <div
            class="flex grow flex-col gap-y-5 overflow-y-auto bg-white py-[60px] px-6"
            :style="{
              backgroundImage: `url('/images/sidebar-bg.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          >
            <div class="flex h-16 shrink-0 items-start justify-between">
              <!-- Logo -->
              <NuxtLink to="/">
                <img
                  :src="Logo"
                  alt="Company Logo"
                  class="w-full h-full"
                  width="24"
                  height="24"
                />
              </NuxtLink>

              <!-- Close Button -->
              <button type="button" @click="sidebarOpen = false">
                <XMarkIcon
                  aria-hidden="true"
                  class="size-6 text-gray-700 hover:cursor-pointer"
                />
              </button>
            </div>
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
                      >
                        {{ item.name }}
                        <span
                          class="absolute left-0 bottom-0 h-0.5 w-full bg-primary hidden group-hover:block"
                        />
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
                <li class="mt-auto">
                  <Button variant="primary" class="w-full">Login</Button>
                </li>
              </ul>
            </nav>
          </div>
        </DialogPanel>
      </div>
    </Dialog>

    <!-- Desktop Header -->
    <div
      class="sticky top-0 z-40 h-auto w-full bg-white px-5 py-3 shadow-xs lg:px-28 lg:py-7"
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

        <Button variant="primary" class="hidden lg:block">Login</Button>
      </div>
    </div>
  </div>
</template>
