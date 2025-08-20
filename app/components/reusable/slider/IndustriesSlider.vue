<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { defineProps, ref } from 'vue';
import { Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { NuxtImg } from '#components';
import TextField from '../typography/TextField.vue';

interface CardItem {
  image: string;
  title: string;
  text: string;
  price: string;
  reviews: number;
  inStock: boolean;
}

interface Props {
  items: CardItem[];
}
const props = defineProps<Props>();

// Modal state
const isModalOpen = ref(false);
const selectedItem = ref<CardItem | null>(null);

const openModal = (item: CardItem) => {
  selectedItem.value = item;
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
  selectedItem.value = null;
};
</script>

<template>
  <!-- Slider -->
  <Swiper
    :modules="[Autoplay, FreeMode, Pagination, Navigation]"
    :slides-per-view="1.2"
    :space-between="20"
    :free-mode="true"
    :auto-height="true"
    :pagination="{ clickable: true }"
    :navigation="true"
    :breakpoints="{
      400: { slidesPerView: 1.7 },
      768: { slidesPerView: 2, spaceBetween: 24 },
      1200: { slidesPerView: 3, spaceBetween: 24 },
      1400: { slidesPerView: 4, spaceBetween: 24 }
    }"
    class="leadsSwiper w-full"
  >
    <SwiperSlide
      v-for="(item, index) in props.items"
      :key="index"
      class="flex justify-center items-center cursor-pointer"
      @click="openModal(item)"
    >
      <div class="w-full max-w-[387px] flex flex-col items-start p-4 bg-white shadow-xl rounded-xl">
        <NuxtImg
          :src="item.image"
          :alt="item.title"
          class="w-full h-full max-w-[351px] max-h-[251px] rounded-xl"
        />
        <div class="flex flex-col items-start gap-4 mt-4">
          <TextField textStyle="BodyLgBold" :value="item.title" class="text-primary" />
          <TextField textStyle="BodyBaseNormal" :value="item.text" class="text-primary" />
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  <!-- Modal -->
  <Dialog :open="isModalOpen" @close="closeModal" class="relative z-50">
    <!-- Backdrop -->
    <DialogOverlay class="fixed inset-0 bg-black/50 transition-opacity" />

    <!-- Content -->
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <DialogPanel
        class="relative w-full max-w-4xl transform rounded-xl bg-white p-6 text-left shadow-xl transition-all"
      >
        <!-- Close -->
        <button
          type="button"
          @click="closeModal"
          class="absolute right-3 top-3 rounded-full p-1 text-gray-400 hover:text-gray-600"
        >
          <XMarkIcon class="w-6 h-6" />
        </button>

        <!-- Card content -->
        <div v-if="selectedItem" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Left -->
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl font-bold text-primary">{{ selectedItem.title }}</h2>
            <p class="text-gray-600">{{ selectedItem.text }}</p>

            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-bold text-primary">{{ selectedItem.price }}</span>
              <span class="text-gray-500">/ Per Lead</span>
            </div>

            <div class="flex items-center gap-3">
              <span
                v-if="selectedItem.inStock"
                class="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full"
              >
                In Stock
              </span>
              <span v-else class="px-3 py-1 text-sm font-medium text-red-700 bg-red-100 rounded-full">
                Out of Stock
              </span>
              <span class="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span class="text-sm text-gray-500">({{ selectedItem.reviews }} reviews)</span>
            </div>

            <div class="flex gap-3 mt-4">
           
              <button
                class="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90"
              >
                Login
              </button>
            </div>
          </div>

          <!-- Right -->
          <div>
            <NuxtImg
              :src="selectedItem.image"
              :alt="selectedItem.title"
              class="w-full rounded-xl"
            />
          </div>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>

<style>
.swiper-wrapper {
  height: 100% !important;
}
.swiper-slide {
  padding: 10px 0 !important;
}
.leadsSwiper {
  height: 100%;
}
.leadsSwiper .swiper-slide {
  display: flex;
  height: 100% !important;
}
.leadsSwiper .swiper-slide > * {
  flex: 1;
}
.swiper-button-next,
.swiper-button-prev {
  background-color: #ffffff;
  border-radius: 50%;
  width: 74px;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease, transform 0.2s ease;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: #003968;
  color: #ffffff;
  transform: scale(1.05);
}
.swiper-button-next:focus,
.swiper-button-prev:focus {
  outline: none;
  background-color: #003968;
  color: #ffffff;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 24px;
  color: #003968;
}
.swiper-button-next:hover::after,
.swiper-button-prev:hover::after {
  color: #ffffff;
}
</style>
