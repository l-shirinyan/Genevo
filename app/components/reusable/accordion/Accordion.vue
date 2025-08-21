<script setup lang="ts">
import { ref, nextTick } from "vue";
import TextField from "../typography/TextField.vue";

interface FAQItem {
  title: string;
  description: string;
  price: string | number;
}

interface Props {
  items: FAQItem[];
}

defineProps<Props>();

const openIndex = ref<number | null>(null);

const toggle = async (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
  await nextTick();
};
</script>

<template>
  <div class="w-full flex flex-col gap-3 max-w-7xl">
    <div v-for="(item, index) in items" :key="index" class="mb-4">
      <!-- Header -->
      <div
        class="flex flex-row justify-between items-center p-6 shadow-md cursor-pointer"
        :class="openIndex === index ? 'bg-[#E5EBF0] rounded-t-xl' : 'bg-white rounded-xl'"
        @click="toggle(index)"
      >
        <TextField textStyle="Body3XlSemiBold" :value="item.title" class="text-primary" />

        <NuxtImg
          src="/icons/arrowdown.svg"
          alt="Arrow"
          class="w-6 h-6 transition-transform duration-500"
          :class="openIndex === index ? 'rotate-180' : 'rotate-0'"
        />
      </div>

      <!-- Content -->
      <transition
        enter-active-class="transition-all duration-700 ease-out"
        leave-active-class="transition-all duration-300 ease-in"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-[1000px] opacity-100"
        leave-from-class="max-h-[1000px] opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
        <div
          v-show="openIndex === index"
          class="bg-white max-w-7xl w-full flex flex-col items-start rounded-b-2xl lg:flex-row justify-between lg:items-center p-6 overflow-hidden"
          :class="openIndex === index ? 'shadow-xl' : 'shadow-none'"
        >
          <TextField textStyle="BodyxlMedium" :value="item.description" class="text-secondary max-w-[660px] w-full" />
          <TextField textStyle="Body2xlBold" :value="item.price" class="text-primary text-nowrap self-end" />
        </div>
      </transition>
    </div>
  </div>
</template>
