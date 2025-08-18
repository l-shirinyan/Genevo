<script setup lang="ts">
import TextField from "~/components/reusable/typography/TextField.vue";
import { solutions, leadCards, success, timelineItems, verifiedData, images, toolsImages } from '~/constants/data'
import FeatureCard from '~/components/reusable/card/FeatureCard.vue'
import ToolsSwiper from '~/components/reusable/slider/ToolsSlide.vue'
import InfoCard from '~/components/reusable/card/InfoCard.vue'
import Button from '~/components/reusable/button/CustomButton.vue'
import WorkImage from '/images/work.png'
import DiscussionImage from '/images/discussion.png'
import SolutionCard from '~/components/reusable/card/SolutionCard.vue'
import VerificationBlock from "~/components/reusable/hero/VerificationBlock.vue";
</script>

<template>
<div class="flex flex-col items-center justify-center gap-26 px-5 py-48 md:gap-14 mb-24 bg-[url('/images/solution-mobile-bg.png')] 
         md:bg-[url('/images/solutions-bg.png')] 
         bg-cover bg-center" >
    <div class="flex flex-col items-center justify-center text-center gap-6 max-w-[1100px]" >
        <TextField textStyle="Body6xlBold" value="Everything You Need to Find, Nurture & Close More Leads" class="text-primary" />
        <TextField textStyle="BodyxlMedium" value="Explore AI-powered tools, verified leads, and expert support built to drive measurable results." class="text-primary" />
    </div>
    <Button variant="primary" class="w-full max-w-[458px]"> Start Now</Button>
</div>


<div class="flex flex-col items-center gap-8 lg:gap-16 px-5 md:px-20 mb-24">
      <div class="flex flex-col items-center justify-center text-center gap-6 " >
        <TextField textStyle="Body6xlBold" value="Tailored Solutions for Business Needs" class="text-primary" />
        <TextField textStyle="BodyxlMedium" value="VIP Business Services helps businesses compete with solutions tailored to boost efficiency, hit goals, and support sales strategy." class="text-primary w-full max-w-[963px]" />
    </div>
    <div class="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
        <NuxtImg
              :src="DiscussionImage"
              alt="Discussion Image"
              class="w-full h-full max-w-[593px] max-h-[452px] rounded-2xl"
            />

    <div class="relative flex flex-col lg:w-7/12 w-max max-w-fit">

  <!-- Vertical Line -->
  <div class="absolute left-2 top-[0.5rem] bottom-[0.5rem] w-0.5 bg-yellow z-0"></div>

  <div class="flex flex-col gap-12 relative max-w-fit w-full">
    <div
      v-for="(item, index) in timelineItems"
      :key="index"
      class="flex items-start sm:items-center gap-4 relative z-10"
    >
      <span   :class="[
      'flex-shrink-0 w-4 h-4 bg-yellow rounded-full',
      index === 0 ? 'mt-0' : 'mt-1',
      index === timelineItems.length - 1 ? 'self-end sm:self-auto' : ''
    ]"></span>

      <TextField textStyle="Body2xlSemibold" :value="item" class="text-deep-blue md:text-nowrap"/>
    </div>
  </div>
</div>

    </div>
</div>

  <div class="flex flex-col items-center gap-12 px-5 md:px-20 mb-24">
    <div class="flex flex-col items-center text-center gap-6">
      <TextField textStyle="Body6xlBold" value="AI-Powered Lead Generation" class="text-primary" />
      <TextField textStyle="BodyxlMedium" value="Use AI to find prospects that match your ideal customer profile." class="text-primary" />
    </div>
        <div class="flex flex-wrap justify-center gap-y-20 gap-6 mt-12 px-10 md:px-0">
    <FeatureCard
      v-for="(solution, index) in solutions"
      :key="index"
      :icon-src="solution.iconSrc"
      :icon-alt="solution.title"
      :title="solution.title"
      :description="solution.description"
      titleClass="text-wrap line-clamp-2"
      featureCard="lg:!max-w-[410px] !fill-xl-available"
    />
  </div>
  </div>

  <div class="flex flex-col lg:flex-row items-center justify-center gap-12 mb-24 px-5 lg:px-20">
   <div class="flex flex-col items-center lg:items-start gap-12 w-full max-w-[458px]">
     <div class="flex flex-col items-center lg:items-start lg:text-start gap-6 text-center">
       <TextField textStyle="Body6xlBold" value="Why It Matters" class="text-primary" />
        <TextField textStyle="BodyxlMedium" value="From contact verification to intent scoring, we ensure every lead is worth your time." class="text-primary" />
    </div>
    <Button variant="primary" class="w-full hidden lg:block">View Product Catalog</Button>
   </div>
   <div class="grid grid-cols-1 max-w-fit w-full [min-width:-webkit-fill-available] lg:min-w-0 lg:max-w-[751px] sm:grid-cols-2 gap-6">
    <NuxtImg
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      :alt="image.alt"
      :class="image.class"
      style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    />

  </div>
  <Button variant="primary" class="w-full max-w-[400px] block lg:hidden">View Product Catalog</Button>
  </div>

   <div class="flex flex-col items-center gap-8 lg:gap-16 mb-24 px-5">
    <div class="flex flex-col items-center gap-6 text-center">
    <TextField textStyle="Body6xlBold" value="Custom Lead Solutions" class="text-primary" />
    <TextField textStyle="BodyxlMedium" value="Strategies personalized to your business needs." class="text-primary w-full" />
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 ">
    <InfoCard
        v-for="(card, index) in leadCards"
        :key="index"
        :icon="card.icon"
        :alt="card.title"
        :title="card.title"
        :text="card.text"
    />
  </div>
  </div>
   

<VerificationBlock
  title="Advanced Data Verification"
  backgroundImage="/images/verification-bg.png"
  imageSrc="/images/iPhone.png"
  imageAlt="Iphone"
  :points="verifiedData"
  verifiedIcon='/icons/verified.svg'
  :showIcon="true"
  :showButton="false"
/>

  <div class="flex flex-col items-center gap-8 lg:gap-16 mb-24">
    <div class=" flex flex-col items-center gap-6">
    <TextField textStyle="Body6xlBold" value="Multi-Channel Integration" class="text-primary text-center" />
     <TextField textStyle="BodyxlMedium" value="Easily connect your CRM, email, and social tools to keep workflows seamless." class="text-primary text-center" />
    </div>
     <div class="w-full">
    <ToolsSwiper :images="toolsImages" />
  </div>
  </div>

  <div class="flex flex-col items-center justify-center gap-10 px-5 md:px-20 mb-24 md:flex-row-reverse">
   <div class="flex flex-col gap-12">
    <div class="flex flex-col items-center text-center max-w-[658px] md:items-start md:text-left gap-6">
        <TextField textStyle="Body6xlBold" value="Support and Guidance" class="text-primary" />
        <TextField textStyle="BodyxlMedium" value="Most CRMs track — we help you sell. VIP Business Services offers industry-specific solutions for scale, speed, and ROI." class="text-primary" />
    </div>
     <Button variant="primary" class="w-full md:block hidden"> Contact Us</Button>    
    </div>
          <NuxtImg
              :src="WorkImage"
              alt="Check Icon"
              class="w-full h-full max-w-[593px] max-h-[452px] rounded-2xl"
            />
         <Button variant="primary" class="w-full block md:hidden"> Contact Us</Button>    
  </div>


  <div class="flex flex-col items-center justify-center gap-7 mb-24 px-5 md:px-20">
      <div class="w-full max-w-[882px] flex flex-col items-center gap-6">
    <TextField textStyle="Body6xlBold" value="Your Success, Simplified" class="text-primary text-center" />
     <TextField textStyle="BodyxlMedium" value="Every business is unique — that’s why we tailor services to your growth goals, from day one through ongoing support." class="text-primary text-center" />
    </div>

    <div class="w-full flex flex-col items-center gap-7 md:flex-row md:justify-center md:gap-12">
    <SolutionCard
      v-for="(item, index) in success"
      :key="index"
      :icon-src="item.iconSrc"
      :icon-alt="item.title"
      :title="item.title"
      :description="item.description"
    />
    </div>
  </div>

</template>
