<script setup lang="ts">
import TextField from "~/components/reusable/typography/TextField.vue";
import { resourcesData, resourcesImages, tools } from '~/constants/data'
import ResorcesBg from "/images/resorces-bg.png";
import resorces from "/images/resources.png";
import ToolsSwiper from '~/components/reusable/slider/ToolsSlide.vue'
import Button from '~/components/reusable/button/CustomButton.vue'
import VerificationBlock from "~/components/reusable/hero/VerificationBlock.vue";
import HeroSection from "~/components/reusable/hero/HeroSection.vue";
import FeatureCard from "~/components/reusable/card/FeatureCard.vue";
import ResourcesSlider from "~/components/reusable/slider/ResourcesSlider.vue";
</script>

<template>
  <HeroSection
    title="Resources to Empower Your Growth"
    subtitle="Explore curated tools, insights, and templates designed to educate, inform, and support your business journey."
    :buttonTexts="['Explore Resourses']"
    :backgroundImage="ResorcesBg"
    :imageSrc="resorces"
    imageAlt="Resources"
    contentClasses="max-w-[716px]"
  />

   <div class="flex flex-col items-center gap-12 px-5 mb-24">
    <TextField textStyle="Body6xlBold" value="Tools & Templates" class="text-primary text-center mb-12" />
    <div class="flex flex-wrap justify-center gap-y-20 gap-6 px-5 mt-10 md:px-0">
    <FeatureCard
      v-for="(tool, index) in tools"
      :key="index"
      :icon-src="tool.iconSrc"
      :icon-alt="tool.title"
      :title="tool.title"
      :description="tool.description"
      titleClass="text-wrap line-clamp-2"
      featureCard="lg:!max-w-[410px] !fill-xl-available"
    />
  </div>
  </div>


<VerificationBlock
  title="Blog & Insights"
  backgroundImage="/images/verification-bg.png"
  imageSrc="/images/iPhone.png"
  imageAlt="Iphone"
  :points="resourcesData"
  verifiedIcon='/icons/check.svg'
  :showButton="true"
  buttonText="Explore Resourses"
/>

  <div class="flex flex-col items-center gap-8 lg:gap-16 mb-24">
    <div class=" flex flex-col items-center gap-6 text-center">
    <TextField textStyle="Body6xlBold" value="Multi-Channel Integration" class="text-primary" />
     <TextField textStyle="BodyxlMedium" value="Easily connect your CRM, email, and social tools to keep workflows seamless." class="text-primary" />
    </div>
     <div class="w-full">
    <ToolsSwiper :images="resourcesImages"/>
  </div>
  </div>


  <div class="flex flex-col items-center gap-8 lg:gap-16 mb-24 px-5 lg:px-20 py-8">
    <div class="flex flex-col items-center text-center gap-6">
        <TextField textStyle="Body6xlBold" value="Smarter CRM for Growing Teams" class="text-primary" />
        <TextField textStyle="BodyxlMedium" value="An all-in-one platform to manage sales, support, and automation." class="text-primary" />
    </div>
    <ResourcesSlider />
  </div>

  <div class="flex flex-col items-center justify-center gap-26 px-5 py-48 md:gap-14 bg-[url('/images/buildings.png')] bg-cover bg-center" >
    <div class="flex flex-col items-center justify-center text-center gap-6 max-w-[649px]" >
        <TextField textStyle="Body6xlBold" value="Every Lead Is Verified and Scored" class="text-white" />
        <TextField textStyle="BodyxlMedium" value="From contact verification to intent scoring, we ensure every lead is worth your time." class="text-white" />
    </div>
    <Button variant="white" class="w-full max-w-90">Explore Resourses </Button>
</div>
</template>