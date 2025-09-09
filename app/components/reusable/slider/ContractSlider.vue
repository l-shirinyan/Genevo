<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { defineProps } from "vue";
import PricingCard from "../card/PricingCard.vue";
import { tiers } from "~/constants/data";
</script>

<template>
  <Swiper
    class="w-full"
    :modules="[Autoplay, FreeMode, Pagination]"
    :space-between="20"
    :free-mode="true"
    :pagination="{ clickable: true }"
    :breakpoints="{
      320: { slidesPerView: 1, spaceBetween: 16 },
      550: { slidesPerView: 1.4, spaceBetween: 16 },
      768: { slidesPerView: 2, centeredSlides: false },
      992: { slidesPerView: 3, spaceBetween: 24 },
      1920: { slidesPerView: 4, spaceBetween: 24 },
    }"
  >
    <SwiperSlide
      v-for="(tier, idx) in tiers"
      :key="idx"
      class="flex justify-center items-center cursor-pointer max-w-[500px] min-w-[320px] sm:min-w-[400px]"
    >
      <PricingCard :key="tier.id" :tiers="[tier]" buttonText="Choose Plan" />
    </SwiperSlide>
  </Swiper>
</template>
