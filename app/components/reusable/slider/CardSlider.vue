<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { tiers } from "@/constants/data";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import PricingCard from "@/components/reusable/card/PricingCard.vue";


const swiperRef = ref<any>(null);
const updateSwiper = () => {
  nextTick(() => {
    swiperRef.value?.swiper?.update();
  });
};

onMounted(() => {
  window.addEventListener('resize', updateSwiper);
  updateSwiper();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSwiper);
});
</script>

<template>
  <Swiper
    ref="swiperRef"
    :modules="[Autoplay, FreeMode, Pagination]"
    :slides-per-view="1.2"
    :free-mode="true"
    :pagination="{ clickable: true }"
    :auto-height="true"
    :observer="true"
    :observe-parents="true"
    :observe-slide-children="true"
    :breakpoints="{
      360: { slidesPerView: 1 },
      530: { slidesPerView: 1 },
      650: { slidesPerView: 1.7 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2.3 },
      1200: { slidesPerView: 3 }
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
.swiper{
  padding-block: 24px;
}
.pricingSwiper .swiper-slide {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.pricingSwiper .swiper-slide > * {
  flex: none;
  width: 100%;
}
@media (max-width:1330px){
  .swiper{
  padding-top: 24px;
  padding-bottom: 80px;
}
}
</style>
