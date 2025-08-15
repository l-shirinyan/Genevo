<script setup lang="ts">
import { tiers } from '~/constants/data'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import PricingCard from '../card/pricing-card.vue'
</script>

<template>
  <Swiper
    :modules="[Autoplay, FreeMode, Pagination]"
    :slides-per-view="1.2"
    :space-between="24"
    :free-mode="true"

    :pagination="{ clickable: true }"
    :breakpoints="{
      360: { slidesPerView: 1.2 ,},
      530: { slidesPerView: 1.2,},
      650: { slidesPerView: 1.7,},
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2.3},
      1200: { slidesPerView: 3},
    }"
    class="pricingSwiper w-full"
  >
   <SwiperSlide
      v-for="tier in tiers"
      :key="tier.id"
      class="flex justify-center"
    >
      <PricingCard :tiers="[tier]" buttonText="Choose Plan" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.swiper-slide{
    padding: 10px 0px !important;
}
</style>