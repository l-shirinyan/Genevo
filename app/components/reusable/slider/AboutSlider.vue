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
      360: { slidesPerView: 1.1 },
      380: { slidesPerView: 1.05 },
      450: { slidesPerView: 1.3 },
      470: { slidesPerView: 1.5 },
      580: { slidesPerView: 1.8 },
      730: { slidesPerView: 2.3 },
      768: { slidesPerView: 2.1 },
      992: { slidesPerView: 2.7 },
      1200: { slidesPerView: 3 },
      1550: { slidesPerView: 3.5 },
      1650: { slidesPerView: 4 },
      1920: { slidesPerView: 4.5 },
      2300: { slidesPerView: 5.3 },
    }"
  >
    <SwiperSlide
      v-for="(item, index) in aboutSlider"
      :key="index"
    >
      <div class="flex justify-center w-full">
        <div
          class="w-full max-w-[326px] min-w-fit shadow-md md:max-w-fit flex flex-col gap-4 lg:gap-8 rounded-xl py-5 px-4"
        >
          <div
            class="flex items-center justify-center rounded-full w-16 h-16 bg-yellow-100"
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

<style>


.swiper-slide {
  display: flex;
  height: 100% !important;
}

.aboutSwiper .swiper-slide > * {
  flex: 1;
}
.aboutSwiper .swiper-wrapper{
    padding-block: 10px !important;
}
</style>