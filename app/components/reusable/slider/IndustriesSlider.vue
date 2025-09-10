<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { defineProps, ref } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { CheckIcon } from "@heroicons/vue/24/solid";
import { NuxtImg } from "#components";
import TextField from "../typography/TextField.vue";
import Button from "../button/CustomButton.vue";
import { Dialog, DialogPanel, DialogOverlay, TransitionChild, TransitionRoot } from "@headlessui/vue";

export type CardItem = {
  image: string;
  name: string;
  description: string;
  price: string;
  total_reviews: number;
  inStock: boolean;
}

interface Props {
  items:CardItem[];
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
    :modules="[Autoplay, FreeMode, Pagination]"
    :slides-per-view="1.2"
    :space-between="20"
    :free-mode="true"
    :auto-height="true"
    :pagination="{ clickable: true }"
    :breakpoints="{
      400: { slidesPerView: 1.7 },
      768: { slidesPerView: 2.8, spaceBetween: 24 },
      992: { slidesPerView: 3, spaceBetween: 24 },
      1200: { slidesPerView: 3.5, spaceBetween: 24 },
      1400: { slidesPerView: 4, spaceBetween: 24 },
      1600: { slidesPerView: 4.5, spaceBetween: 24 },
      1920: { slidesPerView: 5, spaceBetween: 24 },
    }"
    class="leadsSwiper w-full"
  >
    <SwiperSlide
      v-for="(item, index) in props.items"
      :key="index"
      class="flex justify-center items-center cursor-pointer"
      @click="openModal(item)"
    >
      <div
        class="w-full max-w-[387px] flex flex-col items-start p-4 bg-white shadow-xl rounded-xl"
      >
        <NuxtImg
          :src="item.image"
          :alt="item.name"
          class="w-full max-w-[351px] h-[251px] rounded-xl object-cover"
        />
        <div class="flex flex-col items-start gap-4 mt-4 max-w-full">
          <TextField
            textStyle="Body3XlBold"
            :value="item.name"
            class="text-primary truncate max-w-full"
          />
          <TextField
            textStyle="BodyBaseNormal"
            :value="item.description"
            class="text-primary truncate max-w-full"
          />
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  <!-- Modal -->
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

    <div class="fixed inset-0 z-50 flex items-center justify-center p-6 md:px-[120px] lg:p-4">
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
          class="relative w-full lg:max-w-[1327px] max-h-full transform rounded-xl bg-white p-8 md:p-12 text-left shadow-xl transition-all overflow-auto"
        >
          <button
            type="button"
            @click="closeModal"
            class="absolute right-2 top-2 rounded-full p-1 text-gray-400 hover:text-gray-600"
          >
            <XMarkIcon class="w-6 h-6" />
          </button>

          <div
            v-if="selectedItem"
            class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-center"
          >
           <div class="flex flex-col gap-2 lg:gap-6 order-2 lg:order-1">
            <TextField
              textStyle="Body6xlBold"
              :value="selectedItem.name"
              class="text-primary"
            />
            <TextField
              textStyle="BodyXLNormal"
              :value="selectedItem.description"
              class="text-primary"
            />

            <div class="flex flex-col items- justify-center gap-2 md:gap-4 lg:gap-6">
              <div class="flex flex-row items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <TextField
                    textStyle="Body6xlBold"
                    :value="`$`+ selectedItem.price"
                    class="text-primary"
                  />
                </div>
                <span
                  v-if="true"
                  class="px-3 py-1 flex items-center gap-2 text-sm font-medium text-[#0A8138] bg-[#DAECE1] rounded-full"
                >
                  <CheckIcon class="w-4 h-4" />
                  In Stock
                </span>
              </div>

              <div class="flex flex-row items-center justify-end">
                <div>
                  <span v-for="n in 3" class="text-[#F9F3E1]">⭐</span>
                  <span class="text-base text-[#4B5563] text-nowrap ml-2"
                    >({{ selectedItem.total_reviews }} reviews)</span
                  >
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              class="w-full px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90"
            >
               Login to Purchase
            </Button>
          </div>

          <div class="w-full h-full order-1 lg:order-2">
            <NuxtImg
              :src="selectedItem.image"
              :alt="selectedItem.name"
              class="w-full h-full rounded-xl max-h-[350px] lg:max-h-[450px] object-cover"
            />
          </div>
          </div>
        </DialogPanel>
      </TransitionChild>
    </div>
  </Dialog>
</TransitionRoot>
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
@media (max-width: 772px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
</style>
