<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { defineProps } from "vue";

const props = defineProps<{
  images: string[];
}>();
</script>

<template>
  <Swiper
    :modules="[Autoplay, FreeMode, Pagination]"
    :slides-per-view="1.2"
    :space-between="20"
    :free-mode="true"
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    :breakpoints="{
      320: { slidesPerView: 1.8, spaceBetween: 16 },
      400: { slidesPerView: 2.3, spaceBetween: 16 },
      550: { slidesPerView: 2.8, spaceBetween: 16 },
      768: { slidesPerView: 3, centeredSlides: false },
      992: { slidesPerView: 4, spaceBetween: 24 },
      1920: { slidesPerView: 6, spaceBetween: 24 },
    }"
  >
    <SwiperSlide
      v-for="(src, idx) in props.images"
      :key="idx"
      class="flex justify-center items-center cursor-pointer"
    >
      <NuxtImg :src="src" alt="Tools Icon" class="object-cover tools-image" />
    </SwiperSlide>
  </Swiper>
</template>
<style>
@media screen and (min-width:1920px){
  .tools-image{
    width: 80%;
    height: 80%;
  }
}
</style>