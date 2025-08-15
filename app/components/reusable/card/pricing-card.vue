<script setup lang="ts">
import { defineProps } from 'vue'
import Button from '../button/button.vue'
import CheckIcon from '~/assets/icons/check.svg'

interface Tier {
  id: number | string
  name: string
  description: string
  price: string
  features: string[]
  featured?: boolean
}

interface CardProps {
  tiers: Tier[]
  buttonText?: string
}

const props = defineProps<CardProps>()
const hoveredCard = ref<number | string | null>(null)
</script>

<template>
  <form class="bg-white">
    <div class="mx-auto max-w-7xl px-6">
        <div
          v-for="tier in props.tiers"
          :key="tier.id"
          class="group rounded-3xl min-w-[260px] lg:w-[340px] h-auto p-5 lg:p-8 shadow-xl bg-white hover:bg-primary transition-colors duration-300 ease-in-out hover:cursor-pointer"
          @mouseenter="hoveredCard = tier.id"
          @mouseleave="hoveredCard = null"
        >
          <p class="flex items-baseline gap-x-1">
            <span
              class="md:text-6xl text-5xl font-bold tracking-tight text-primary transition-colors duration-300 ease-in-out group-hover:text-white"
            >
              {{ tier.price }}
            </span>
            <span class="text-base font-medium text-gray-purple">/ Leads</span>
          </p>

          <div class="flex flex-col gap-10 items-start">
            <div class="flex flex-col items-start justify-between gap-4 mt-5">
              <h3
                :id="`tier-${tier.id}`"
                class="text-[28px] lg:text-3xl font-semibold text-primary transition-colors duration-300 ease-in-out group-hover:text-white"
              >
                {{ tier.name }}
              </h3>
              <p class="text-base text-lavender-gray">{{ tier.description }}</p>
            </div>

            <ul role="list" class="space-y-3 text-xs lg:text-base text-lavender-gray">
              <li v-for="(feature, index) in tier.features" :key="`${tier.id}-${index}`" class="flex gap-x-3 text-base">
            <NuxtImg
              :src="CheckIcon"
              alt="Check Icon"
              class="w-5 h-6 flex-none text-deep-indigo group-hover:fill-white"
            />
                {{ feature }}
              </li>
            </ul>

            <Button :variant="hoveredCard === tier.id ? 'white' : 'primary'" class="w-full">
              {{ props.buttonText || 'Choose Plan' }}
            </Button>
          </div>
        </div>
      </div>
  </form>
</template>