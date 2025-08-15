<script setup lang="ts">
import Logo from '~/assets/images/logo.png'
import { footerNavigation, socialLinks } from '~/constants/data'
import Button from '~/components/reusable/button/button.vue'
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-deep-blue">
    <div class="mx-auto max-w-7xl px-5 pt-6 lg:pt-8 pb-4">
      <div class="flex items-center justify-between flex-col lg:flex-row lg:items-start gap-12 xl:gap-[74px]">
        <!-- Logo -->
        <div class="w-20 h-11">
            <NuxtLink to="/">
            <img :src="Logo" alt="Company Logo" width="24" height="24" class="w-full h-full" />
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <div class="w-full lg:w-auto flex items-start gap-6 xl:gap-16">
          <div class="w-full lg:w-auto">
            <h3 class="text-base lg:text-xl font-semibold text-white">
              AI Leads
            </h3>
            <ul class="mt-5 space-y-4">
              <li v-for="item in footerNavigation.leads" :key="item.name">
                <NuxtLink
                  :to="item.href"
                  class="text-sm/6 lg:text-base text-gray-400 transition-colors duration-300 ease-in-out hover:text-white"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="w-full lg:w-auto">
            <h3 class="text-base lg:text-xl font-semibold text-white">
              Customer Services
            </h3>
            <ul class="mt-5 space-y-4">
              <li v-for="item in footerNavigation.services" :key="item.name">
                <NuxtLink
                  :to="item.href"
                  class="text-sm/6 lg:text-base text-gray-400 transition-colors duration-300 ease-in-out hover:text-white"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="w-full lg:w-auto">
            <h3 class="text-base lg:text-xl font-semibold text-white">
              Contact Us
            </h3>
            <div class="flex items-center justify-start gap-3 mt-5">
              <NuxtLink
                v-for="link in socialLinks"
                :key="link.alt"
                :to="link.href"
              >
                <NuxtImg
                  :src="link.icon"
                  :alt="link.alt"
                  class="w-6 h-6"
                />
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="w-full lg:w-auto">
          <h3 class="text-base lg:text-xl font-semibold text-white">
            Sign Up For Our Newsletter
          </h3>
          <p class="mt-3 text-sm/6 text-gray-400">
            At latest deals and savings, sent to your inbox weekly.
          </p>
          <form class="mt-8 flex w-full gap-1.5 max-w-full">
            <label for="email-address" class="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              required
              placeholder="Enter your email"
              autocomplete="email"
              class="w-full min-w-0 rounded-lg lg:w-[232px] bg-light-gray px-3 py-1.5 text-sm text-primary font-medium placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            />
            <div class="sm:shrink-0">
               <Button  variant="default">
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div class="mt-[90px] border-t border-soft-gray">
        <div class="mt-2 flex justify-center lg:justify-end">
          <p class="text-xs font-semibold text-secondary">
            &copy; 2022 - {{ currentYear }} Leads. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
