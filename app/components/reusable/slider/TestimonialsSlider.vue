<template>
  <div class="flex items-center justify-center result-slider w-full py-10">
    <!-- Desktop Slider -->
    <div class="hidden lg:flex items-center relative w-full max-w-[1130px] gap-8">
      <!-- Navigation Buttons -->
      <div class="flex flex-col gap-4 mb-12">
        <button
          aria-label="Previous testimonial"
          @click="prevSlide"
          class="p-4 rounded-full bg-white shadow-sm hover:cursor-pointer"
        >
          <NuxtImg src="/icons/arrowup.svg" alt="Previous Arrow" class="w-5 h-5" />
        </button>
        <button
          aria-label="Next testimonial"
          @click="nextSlide"
          class="p-4 rounded-full bg-white shadow-sm hover:cursor-pointer"
        >
          <NuxtImg src="/icons/arrowdown.svg" alt="Next Arrow" class="w-5 h-5" />
        </button>
      </div>

      <!-- Testimonials Column -->
      <div class="flex flex-col gap-8 flex-1 items-center">
        <div
          v-for="i in [leftIndex, currentIndex, rightIndex]"
          :key="i"
          :class="i===currentIndex ? 'opacity-100' : 'opacity-20'"
          class="max-w-[462px] w-full text-left text-primary bg-white shadow-sm rounded-xl relative"
        >
          <NuxtImg
            src="/images/Quotes.png"
            alt="quotes"
            class="w-[50px] h-[50px] -top-[22px] left-2.5 absolute"
          />
          <p class="p-8">{{ testimonials[i].text }}</p>
        </div>
      </div>

      <!-- Profile Card -->
      <div
        class="w-[540px] h-auto flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-md"
      >
        <div
          class="w-full h-full max-w-[482px] max-h-[347px] mb-7 overflow-hidden bg-white rounded-xl shadow-xs"
        >
          <NuxtImg
            :src="testimonials[currentIndex].img"
            class="w-full h-full object-cover"
            alt="Profile Image"
          />
        </div>
<div class="flex flex-col items-center gap-2">
            <h4 class="text-primary text-4xl font-semibold">{{ testimonials[currentIndex].name }}</h4>
        <p class="text-primary text-center text-sm">{{ testimonials[currentIndex].title }}</p>
</div>
      </div>
    </div>

    <!-- Mobile Swiper -->
    <Swiper
      class="resultsSwiper"
      :modules="[Pagination, FreeMode]"
      :slides-per-view="1.2"
      :space-between="16"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide
        v-for="(t, i) in testimonials"
        :key="i"
        class="flex flex-col items-center"
      >
        <!-- Profile Card -->
        <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <div class="w-full h-[260px] overflow-hidden rounded-lg mb-6">
            <NuxtImg
              :src="t.img"
              alt="Profile Image"
              class="w-full h-full object-cover"
            />
          </div>
          <h4 class="text-primary text-xl font-semibold">{{ t.name }}</h4>
          <p class="text-primary text-sm">{{ t.title }}</p>
        </div>

        <!-- Testimonial Quote -->
        <div class="bg-white rounded-xl shadow-md p-6 mt-6  relative">
          <NuxtImg
            src="/images/Quotes.png"
            alt="quotes"
            class="w-6 h-6 absolute -top-3 left-3"
          />
          <p class="text-gray-700 text-base leading-relaxed">
            {{ t.text }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = ref([
  {
    text: 'VIP Leads helped us land our biggest contract yet. It’s like having a full-time researcher on our team. Thank You!',
    img: '/images/user.png',
    name: 'Jane Doe',
    title: 'Marketing Specialist',
    quoteColor: '#a9b9cb'
  },
  {
    text: 'VIP Leads helped us land our biggest contract yet. It’s like having a full-time researcher on our team. Thank You!',
    img: '/images/user.png',
    name: 'Byron Rolfson',
    title: 'Regional Solutions Architect',
    quoteColor: '#003366'
  },
  {
    text: 'VIP Leads helped us land our biggest contract yet. It’s like having a full-time researcher on our team. Thank You!',
    img: '/images/user.png',
    name: 'John Smith',
    title: 'Product Manager',
    quoteColor: '#a9b9cb'
  },
  {
    text: 'VIP Leads helped us land our biggest contract yet. It’s like having a full-time researcher on our team. Thank You!',
    img: '/images/user.png',
    name: 'Alice Brown',
    title: 'UI Designer',
    quoteColor: '#ff5733'
  },
  {
    text: 'VIP Leads helped us land our biggest contract yet. It’s like having a full-time researcher on our team. Thank You!',
    img: '/images/user.png',
    name: 'Tom Wilson',
    title: 'Backend Developer',
    quoteColor: '#00aaff'
  },
  {
    text: 'VIP Leads helped us land our biggest contract yet. It’s like having a full-time researcher on our team. Thank You!',
    img: '/images/user.png',
    name: 'Sara Miller',
    title: 'Project Lead',
    quoteColor: '#8e44ad'
  }
])

const currentIndex = ref(0)

const getIndex = (i) => (i + testimonials.value.length) % testimonials.value.length
const leftIndex = computed(() => getIndex(currentIndex.value - 1))
const rightIndex = computed(() => getIndex(currentIndex.value + 1))

const nextSlide = () => {
  currentIndex.value = getIndex(currentIndex.value + 1)
}
const prevSlide = () => {
  currentIndex.value = getIndex(currentIndex.value - 1)
}
</script>

<style scoped>
.resultsSwiper{
    display: none;
}
@media screen and (max-width:1024px){
    .resultsSwiper{
    display: block;
}
}
</style>