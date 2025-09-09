<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { aboutSlider } from "~/constants/data";
import TextField from "../typography/TextField.vue";
</script>

<template>
  <Swiper
    :modules="[Autoplay, FreeMode, Pagination]"
    :slides-per-view="1.2"
    :space-between="24"
    :free-mode="true"
    :auto-height="true"
    :pagination="{ clickable: true }"
    class="aboutSwiper w-full"
           :breakpoints="{
       400: { slidesPerView: 1.2 },
      768: { slidesPerView: 2.1, spaceBetween: 24 },
      992: { slidesPerView: 2.5, spaceBetween: 24 },
      1200: { slidesPerView: 3, spaceBetween: 24 },
      1600: { slidesPerView: 3.5, spaceBetween: 24 },
      1920: { slidesPerView: 4, spaceBetween: 24 },
    }"
  >
    <SwiperSlide
      v-for="(item, index) in aboutSlider"
      :key="index"
      class="h-full"
    >
      <div class="flex justify-center w-full">
        <div
          class="w-full max-w-[326px] min-w-fit min-h-fit shadow-md md:max-w-fit flex flex-col gap-4 lg:gap-8 rounded-xl py-5 px-4"
        >
          <div
            class="flex items-center justify-center rounded-full min-w-16 w-16 min-h-16 bg-yellow-100"
          >
            <NuxtImg
              :src="item.iconSrc"
              :alt="item.title"
              :width="31"
              :height="31"
            />
          </div>

          <div class="flex flex-col items-start gap-8">
            <TextField
              textStyle="Body3XlBold"
              :value="item.title"
              class="text-primary md:text-nowrap"
            />
            <TextField
              textStyle="BodyXLNormal"
              :value="item.description"
              class="text-secondary"
            />
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>

.swiper-wrapper{
  height: 100% !important;
}
.swiper-slide {
  padding: 10px 0px !important;
}
.aboutSwiper .swiper-slide {
  height: 100% !important;
}
.aboutSwiper .swiper-slide {
  display: flex;
}
.aboutSwiper .swiper-slide > * {
  flex: 1;
}
.aboutSwiper .swiper-wrapper{
    padding-block: 10px !important;
}
@media (max-width:580px){
  .aboutSwiper .swiper {
    padding-bottom: 80px !important;
}
}
</style>