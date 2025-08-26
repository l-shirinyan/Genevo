<template>
  <div class="flex items-center justify-center result-slider w-full">
    <div class="hidden overflow-hidden resources-desk justify-center items-start relative w-full gap-8">
      <div class="w-full h-full max-w-[578px] max-h-[570px] transform transition-all duration-700">
        <NuxtImg :src="testimonials[currentIndex].img"
          class="w-full h-full object-cover transform transition-transform duration-700" alt="Resources Image" />
      </div>
      <div class="flex flex-col justify-center gap-10 flex-1 items-center relative max-w-[600px] h-[250px]">
        <transition-group :name="direction === 'next' ? 'testimonial-next' : 'testimonial-prev'" tag="div"
          class="w-full flex flex-col gap-8 absolute top-0 left-0">
          <div v-for="i in [leftIndex, currentIndex, rightIndex]" :key="i"
            class="flex flex-col items-start gap-6 w-full text-left border-l border-l-primary text-primary p-8 bg-white shadow-sm rounded-2xl relative"
            :class="i === currentIndex
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-20 scale-90 z-0'
              ">
            <TextField textStyle="Body3XlBold" :value="testimonials[i].title" class="text-primary w-full" />
            <TextField textStyle="BodyLgNormal" :value="testimonials[i].text"
              class="text-primary w-full text-wrap 2xl:text-nowrap" />
          </div>
        </transition-group>
      </div>
      <div class="flex flex-col items-center gap-4 mt-40">
        <button aria-label="Previous testimonial" @click="prevSlide"
          class="p-4 rounded-full bg-white shadow-sm hover:cursor-pointer transition-transform hover:scale-110">
          <NuxtImg src="/icons/arrowup.svg" alt="Previous Arrow" class="w-5 h-5" />
        </button>
        <button aria-label="Next testimonial" @click="nextSlide"
          class="p-4 rounded-full bg-white shadow-sm hover:cursor-pointer transition-transform hover:scale-110">
          <NuxtImg src="/icons/arrowdown.svg" alt="Next Arrow" class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Swiper -->
    <Swiper class="resourcesSwiper" :modules="[Pagination, FreeMode]" :slides-per-view="1.3" :space-between="16"
      :pagination="{ clickable: true }"  
      :breakpoints="{
        650: { slidesPerView: 1.3, spaceBetween: 16 },
        768: { slidesPerView: 1.5, spaceBetween: 16 },
        992: { slidesPerView: 1.7, spaceBetween: 16 },
      }">
      <SwiperSlide v-for="(t, i) in testimonials" :key="i" class="flex flex-col items-center">
     <div class="h-full">
         <div class="w-full h-full max-w-[578px] max-h-[570px] transform transition-all duration-700">
          <NuxtImg :src="testimonials[currentIndex].img"
            class="w-full h-full object-cover transform transition-transform duration-700" alt="Resources Image" />
        </div>

        <div
          class="max-w-max h-full text-content sm:h-auto flex flex-col items-start gap-6 w-full text-left border-l border-l-primary text-primary p-8 bg-white shadow-sm rounded-2xl relative">
          <TextField textStyle="Body3XlBold" :value="testimonials[i].title" class="text-primary w-full" />
          <TextField textStyle="BodyLgNormal" :value="testimonials[i].text" class="text-primary w-full" />
        </div>
     </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TextField from "../typography/TextField.vue";

const testimonials = ref([
  {
    title: "Workflow Automation ",
    text: "Build zero-code marketing flows that scale with your team.",
    img: "/images/structure.png",
  },
  {
    title: "Lead Management & Tracking",
    text: "Track activity, source, and conversions in real time.",
    img: "/images/structure.png",
  },
  {
    title: "Task & Activity Scheduling",
    text: "Assign, prioritize, track, and follow up — all from one place.",
    img: "/images/structure.png",
  },
  {
    title: "Workflow Automation ",
    text: "Build zero-code marketing flows that scale with your team.",
    img: "/images/structure.png",
  },
  {
    title: "Lead Management & Tracking",
    text: "Track activity, source, and conversions in real time.",
    img: "/images/structure.png",
  },
  {
    title: "Task & Activity Scheduling",
    text: "Assign, prioritize, track, and follow up — all from one place.",
    img: "/images/structure.png",
  },
]);

const currentIndex = ref(0);
const direction = ref("next");
const isAnimating = ref(false);

const getIndex = (i) =>
  (i + testimonials.value.length) % testimonials.value.length;
const leftIndex = computed(() => getIndex(currentIndex.value - 1));
const rightIndex = computed(() => getIndex(currentIndex.value + 1));

const nextSlide = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  direction.value = "next";
  currentIndex.value = getIndex(currentIndex.value + 1);
  setTimeout(() => {
    isAnimating.value = false;
  }, 700);
};

const prevSlide = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  direction.value = "prev";
  currentIndex.value = getIndex(currentIndex.value - 1);
  setTimeout(() => {
    isAnimating.value = false;
  }, 700);
};
</script>

<style scoped>
.resourcesSwiper {
  display: none;
}
 @media screen and (max-width:690px){
  .text-content{
    min-height: 164px ;
} }
 @media screen and (max-width:497px){
  .text-content{
    min-height: 192px ;
} }
 @media screen and (max-width:403px){
  .text-content{
    min-height: 216px;
} }
@media screen and (max-width: 1220px) {
  .resourcesSwiper {
    display: block;
  }
}

@media screen and (min-width: 1221px) {
  .resources-desk {
    display: flex;
  }
}

.testimonial-next-enter-active,
.testimonial-next-leave-active {
  transition: all 0.5s ease;
}

.testimonial-next-enter-from {
  transform: translateY(400%);
}

.testimonial-next-enter-to {
  transform: translateY(275%);
  animation-fill-mode: forwards;
}

.testimonial-next-leave-from {
  transform: translateY(0);
}

.testimonial-next-enter-active,
.testimonial-next-leave-active {
  position: absolute;
  transition: all 0.7s ease-in-out;
}

.testimonial-next-leave-to {
  transform: translateY(-100%);
}

.testimonial-next-move,
.testimonial-prev-move {
  transition: all 0.7s ease-in-out;
}

.testimonial-prev-enter-active,
.testimonial-prev-leave-active {
  transition: all 0.5s ease;
}

.testimonial-prev-enter-from {
  transform: translateY(-200px);
}

.testimonial-prev-enter-to {
  transform: translateY(0);
}

.testimonial-next-move,
.testimonial-prev-move {
  transition: all 0.7s ease-in-out;
}
</style>