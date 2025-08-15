<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import ArrowIcon from '~/assets/icons/arrow-up.svg'

interface Slide {
  id: number
  title: string
  subtitle: string
  image: string
}

const props = defineProps<{
  slides: Slide[]
}>()
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
      450: { slidesPerView: 1.5, spaceBetween: 16 },
      550: { slidesPerView: 1.8, spaceBetween: 16 },
      730: { slidesPerView: 2.3, spaceBetween: 16 },
      768: { slidesPerView: 2.5, spaceBetween:20 },
      992: { slidesPerView: 2.7, spaceBetween:20 },
      1200: { slidesPerView: 3, spaceBetween: 24 },
      1600: { slidesPerView: 4, spaceBetween: 24 },
      2100: { slidesPerView: 5, spaceBetween: 24 }
    }"
    class="w-full"
  >
    <SwiperSlide v-for="slide in slides" :key="slide.id" class="py-5">
      <div
        class="sell-card relative rounded-xl overflow-hidden group cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        :style="{ backgroundImage: `url(${slide.image}); ` }"
      >
        <div class="overlay absolute top-0 left-0 w-full h-full rounded-xl bg-black/30"></div>
        <div class="holo-shine absolute w-full h-full pointer-events-none"></div>
        <div class="content absolute bottom-0 left-0 p-3 w-full flex justify-between items-center text-white">
          <div>
            <div class="font-extrabold text-base md:text-2xl truncate">{{ slide.title }}</div>
            <div class="text-xs md:text-lg truncate">{{ slide.subtitle }}</div>
          </div>
           <NuxtImg :src="ArrowIcon" alt="Arrow Icon" class="w-6 h-6" />
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.swiper-wrapper{
    padding-bottom: 50px !important;
}
.sell-card{
  width:302px;
  height:393px;
   background-size: cover;
  background-position: center;
}
@media screen and (min-width:1120px){
.sell-card {
  width: 400px;
  height: 450px;
  background-size: cover;
  background-position: center;
}}
</style>
