<script setup lang="ts">
import Button from "@/components/reusable/button/CustomButton.vue";

interface Tier {
  id: number | string;
  name: string;
  description: string;
  price: string;
  features: string[];
  featured?: boolean;
}

interface CardProps {
  tiers: Tier[];
  buttonText?: string;
}

const props = defineProps<CardProps>();
const hoveredCard = ref<number | string | null>(null);
</script>

<template>
  <form>
    <div class="mx-auto w-full px-6 h-full">
      <div
        v-for="tier in props.tiers"
        :key="tier.id"
        class="group rounded-3xl w-full min-w-[260px] h-auto p-5 lg:p-8 shadow-xl bg-white hover:bg-primary transition-colors duration-300 ease-in-out hover:cursor-pointer flex flex-col justify-between"
        @mouseenter="hoveredCard = tier.id"
        @mouseleave="hoveredCard = null"
      >
        <p class="flex items-baseline gap-x-1">
          <span
            class="md:text-6xl text-5xl font-bold tracking-tight text-primary transition-colors duration-300 ease-in-out group-hover:text-white"
          >
            {{ tier.price }}
          </span>
          <span
            class="text-base font-medium text-gray-purple group-hover:text-white"
          >
            / Leads
          </span>
        </p>

        <div class="flex flex-col gap-10 items-start flex-grow">
          <div class="flex flex-col items-start justify-between gap-4 mt-5">
            <h3
              :id="`tier-${tier.id}`"
              class="text-[28px] lg:text-3xl font-semibold text-primary transition-colors duration-300 ease-in-out group-hover:text-white"
            >
              {{ tier.name }}
            </h3>
            <p class="text-base text-lavender-gray group-hover:text-white">
              {{ tier.description }}
            </p>
          </div>

          <ul
            role="list"
            class="space-y-3 text-xs lg:text-base text-lavender-gray group-hover:text-white"
          >
            <li
              v-for="(feature, index) in tier.features"
              :key="`${tier.id}-${index}`"
              class="flex gap-x-3 text-base"
            >
              <NuxtImg
                :src="
                  hoveredCard === tier.id
                    ? '/icons/check-white.svg'
                    : '/icons/check.svg'
                "
                alt="Check Icon"
                class="w-5 h-6 flex-none transition-colors duration-300"
              />
              {{ feature }}
            </li>
          </ul>
        </div>

        <Button
          :variant="hoveredCard === tier.id ? 'white' : 'primary'"
          class="w-full mt-6"
        >
          {{ props.buttonText || "Choose Plan" }}
        </Button>
      </div>
    </div>
  </form>
</template>
