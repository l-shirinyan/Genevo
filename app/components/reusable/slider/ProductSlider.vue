<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { mockTestimonials } from "~/constants/data";
import TestimonialCard from "../card/TestimonialCard.vue";

</script>

<template>
  <Swiper
    :modules="[Autoplay, FreeMode, Pagination]"
    :slides-per-view="1.2"
    :space-between="20"
    :free-mode="true"
    :auto-height="true"

    :pagination="{ clickable: true }"
    :breakpoints="{
    400: {
      slidesPerView: 1.5,
    },
    769: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 4,
    },
    }"
    class="productSwiper w-full"
  >
 <SwiperSlide
      v-for="(testimonial, index) in mockTestimonials"
      :key="index"
      class="flex justify-center items-center cursor-pointer"
    >
      <TestimonialCard
        :testimonialText="testimonial.testimonialText"
        :userImage="testimonial.userImage"
        :userName="testimonial.userName"
        :userHandle="testimonial.userHandle"
      />
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
.productSwiper {
  height: 100%; 
}

.productSwiper .swiper-slide {
  display: flex;
  height: 100% !important;
}

.productSwiper .swiper-slide > * {
  flex: 1;
}
</style>