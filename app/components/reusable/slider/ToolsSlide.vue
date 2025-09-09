<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { defineProps } from "vue";

const props = defineProps<{
  images: string[];
  isOriginalImages?: boolean;
}>();
</script>

<template>
  <Swiper
    class="!px-2"
    :modules="[Autoplay, FreeMode, Pagination, Navigation]"
    :slides-per-view="1.2"
    :auto-height="true"
    :space-between="20"
    :free-mode="true"
    :pagination="{ clickable: true }"
    :navigation="true"
    :breakpoints="{
      320: { slidesPerView: 1, spaceBetween: 16 },
      400: { slidesPerView: 1, spaceBetween: 16 },
      550: { slidesPerView: 2, spaceBetween: 16 },
      768: { slidesPerView: 2, centeredSlides: false },
      992: { slidesPerView: 3, spaceBetween: 24 },
      1260: { slidesPerView: 4, spaceBetween: 24 },
      1700: { slidesPerView: 5, spaceBetween: 24 },
      1940: { slidesPerView: 6, spaceBetween: 24 },
    }"
  >
    <SwiperSlide
      v-for="(src, idx) in props.images"
      :key="idx"
      class="flex justify-center items-center cursor-pointer px-2"
    >
      <div
        v-if="!isOriginalImages"
        class="w-[220x] lg:w-[300px] h-[80px] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] bg-white flex items-center justify-center mt-2"
      >
        <NuxtImg
          :src="src"
          alt="Tools Icon"
          class="w-[150px] max-h-[60px] object-cover tools-image"
        />
      </div>
      <NuxtImg
        v-else
        :src="src"
        alt="Tools Icon"
        class="w-full object-cover tools-image"
      />
    </SwiperSlide>
  </Swiper>
</template>
<style>
@media screen and (min-width: 1920px) {
  .tools-image {
    width: 80%;
    height: 80%;
  }
}
</style>
