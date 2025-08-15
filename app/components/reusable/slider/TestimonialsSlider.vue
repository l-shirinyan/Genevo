<template>
  <div class="flex items-center justify-center result-slider w-full py-10">
    <!-- Desktop Slider -->
    <div class="hidden lg:flex items-start relative w-full max-w-[1130px] gap-8">
      <!-- Navigation Buttons -->
      <div class="flex flex-col items-center gap-4 mt-40">
        <button
          aria-label="Previous testimonial"
          @click="prevSlide"
          class="p-4 rounded-full bg-white shadow-sm hover:cursor-pointer transition-transform hover:scale-110"
        >
          <NuxtImg src="/icons/arrowup.svg" alt="Previous Arrow" class="w-5 h-5" />
        </button>
        <button
          aria-label="Next testimonial"
          @click="nextSlide"
          class="p-4 rounded-full bg-white shadow-sm hover:cursor-pointer transition-transform hover:scale-110"
        >
          <NuxtImg src="/icons/arrowdown.svg" alt="Next Arrow" class="w-5 h-5" />
        </button>
      </div>

      <!-- Testimonials Column -->
      <div class="flex flex-col gap-8 flex-1 items-center relative h-[250px]">
        <transition-group
          :name="direction === 'next' ? 'testimonial-next' : 'testimonial-prev'"
          tag="div"
          class="w-full flex flex-col gap-8 absolute top-0 left-0"
        >
          <div
            v-for="i in [leftIndex, currentIndex, rightIndex]"
            :key="i"
            :class="i === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-20 scale-90 z-0'"
            class="max-w-[462px] w-full text-left text-primary bg-white shadow-sm rounded-xl relative transform transition-all duration-500"
          >
            <NuxtImg
              src="/images/Quotes.png"
              alt="quotes"
              class="w-[50px] h-[50px] -top-[22px] left-2.5 absolute"
            />
            <p class="p-8">{{ testimonials[i].text }}</p>
          </div>
        </transition-group>
      </div>

      <!-- Profile Card -->
      <div
        class="w-[540px] h-auto flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-md transform transition-all duration-700"
      >
        <div
          class="w-full h-full max-w-[482px] max-h-[347px] mb-7 overflow-hidden bg-white rounded-xl shadow-xs transform transition-all duration-700"
        >
          <NuxtImg
            :src="testimonials[currentIndex].img"
            class="w-full h-full object-cover transform transition-transform duration-700"
            alt="Profile Image"
          />
        </div>
        <div class="flex flex-col items-center gap-2">
          <h4 class="text-primary text-4xl font-semibold">
            {{ testimonials[currentIndex].name }}
          </h4>
          <p class="text-primary text-center text-sm">
            {{ testimonials[currentIndex].title }}
          </p>
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
        <div class="bg-white rounded-xl shadow-md p-6 mt-6 relative">
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
  },
  {
    text: 'VIP Leads helped us land our biggest contract yet. It’s like having a full-time researcher on our team. Thank You!',
    img: '/images/user.png',
    name: 'Byron Rolfson',
    title: 'Regional Solutions Architect',
  },
  {
    text: 'VIP Leads helped us land our biggest contract yet. It’s like having a full-time researcher on our team. Thank You!',
    img: '/images/user.png',
    name: 'John Smith',
    title: 'Product Manager',
  },
  {
    text: 'VIP Leads helped us land our biggest contract yet. It’s like having a full-time researcher on our team. Thank You!',
    img: '/images/user.png',
    name: 'Alice Brown',
    title: 'UI Designer',
  },
  {
    text: 'VIP Leads helped us land our biggest contract yet. It’s like having a full-time researcher on our team. Thank You!',
    img: '/images/user.png',
    name: 'Tom Wilson',
    title: 'Backend Developer',
  },
  {
    text: 'VIP Leads helped us land our biggest contract yet. It’s like having a full-time researcher on our team. Thank You!',
    img: '/images/user.png',
    name: 'Sara Miller',
    title: 'Project Lead',
  }
])

const currentIndex = ref(0)
const direction = ref('next') // Track direction

const getIndex = (i) => (i + testimonials.value.length) % testimonials.value.length
const leftIndex = computed(() => getIndex(currentIndex.value - 1))
const rightIndex = computed(() => getIndex(currentIndex.value + 1))

const nextSlide = () => {
  direction.value = 'next'
  currentIndex.value = getIndex(currentIndex.value + 1)
}
const prevSlide = () => {
  direction.value = 'prev'
  currentIndex.value = getIndex(currentIndex.value - 1)
}
</script>

<style scoped>
.resultsSwiper {
  display: none;
}
@media screen and (max-width: 1024px) {
  .resultsSwiper {
    display: block;
  }
}
/* Next animation: slide up */
/* Next animation: smooth slide up */
.testimonial-next-enter-active,
.testimonial-next-leave-active {
  transition: all 0.5s ease;
}

.testimonial-next-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.testimonial-next-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.testimonial-next-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.testimonial-next-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Previous animation: slide down */
.testimonial-prev-enter-active,
.testimonial-prev-leave-active {
  transition: all 0.5s ease;
}
.testimonial-prev-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.testimonial-prev-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.testimonial-prev-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.testimonial-prev-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>