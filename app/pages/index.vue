<script setup lang="ts">
import Text from "@/components/reusable/typography/TextField.vue";
import HeroSection from "@/components/reusable/hero/HeroSection.vue";
import heroBg from "/images/hero-bg.png";
import bg from "/images/background.png";
import teamImg from "/images/team.png";
import companyImg from "/images/company.png";
import { infoCards, features, tiers, slides, toolsImages } from "@/constants/data";
import InfoCard from "@/components/reusable/card/InfoCard.vue";
import FeatureCard from "@/components/reusable/card/FeatureCard.vue";
import ToolsSwiper from "@/components/reusable/slider/ToolsSlide.vue";
import ScaleImage from "@/components/reusable/scale/ScaleImage.vue";
import PricingCard from "@/components/reusable/card/PricingCard.vue";
import CardSlider from "@/components/reusable/slider/CardSlider.vue";
import SellSlider from "@/components/reusable/slider/SellSlider.vue";
import NotebookLogo from "/images/notebook.png";
import TestimonialsSlider from "@/components/reusable/slider/TestimonialsSlider.vue";
</script>

<template>
  <HeroSection
    title="Your Next Client, Delivered by AI"
    subtitle="Why chase leads when AI can bring them to you — ready, verified, and matched to your exact filters."
    :buttonTexts="['Become an Affiliate', 'Purchase Leads']"
    :backgroundImage="heroBg"
    button2Class="border-0 w-[216px]"
    :imageSrc="teamImg"
    imageAlt="Team Image"
    textClasses="max-w-[470px] md:max-w-[550px] lg:max-w-none"
  />
  <div class="flex flex-col items-center gap-8 lg:gap-16 mb-24">
    <Text
      textStyle="Body6xlBold"
      value="We Help You Sell, Not Search"
      class="text-primary text-center"
    />
    <SellSlider :slides="slides" />
  </div>

  <HeroSection
    title="Target by Title, Industry, Funding and More"
    subtitle="Get hyper-specific. Use filters like company size, revenue, location, NPI, department, or even intent signals to zero in on real buyers."
    :buttonTexts="['Try It Free']"
    :backgroundImage="bg"
    backgroundPosition="left"
    button1Class="px-[107.5px]"
    :imageSrc="companyImg"
    imageAlt="Team Image"
    extraClasses="max-w-[678px] w-full items-center"
  />

  <div class="flex flex-col items-center gap-8 lg:gap-16 mb-24 px-5">
    <div class="flex flex-col items-center gap-6">
      <Text
        textStyle="Body6xlBold"
        value="Email Outreach That Writes Itself"
        class="text-primary text-center"
      />
      <Text
        textStyle="BodyxlMedium"
        value="Once you receive your leads, we keep them warm with smart, automated follow-ups — so you can focus on closing, not chasing."
        class="text-primary text-center max-w-[740px] w-full"
      />
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <InfoCard
        v-for="(card, index) in infoCards"
        :key="index"
        :icon="card.icon"
        :alt="card.title"
        :title="card.title"
        :text="card.text"
      />
    </div>
  </div>

  <div
    class="flex flex-col items-center justify-center gap-6 md:gap-8 mb-24 py-20 px-5"
    :style="{
      backgroundImage: `url('/images/build-bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <Text
      textStyle="Body6xlBold"
      value="Built for Medical & Healthcare Teams Too"
      class="text-primary text-center w-full max-w-[927px]"
    />
    <Text
      textStyle="BodyxlMedium"
      value="From physician networks to urgent care leads, YMT helps you reach verified medical professionals using filters like NPI, specialty, and facility type."
      class="text-primary text-center max-w-[728px] w-full"
    />
  </div>

  <div class="flex flex-col items-center gap-8 lg:gap-16 px-5 mb-24">
    <div class="flex flex-col items-center gap-6">
      <Text
        textStyle="Body6xlBold"
        value="Real Results from Real Teams"
        class="text-primary text-center"
      />
      <Text
        textStyle="BodyxlMedium"
        value="From physician networks to urgent care leads, YMT helps you reach verified medical professionals using filters like NPI, specialty, and facility type."
        class="block sm:hidden text-primary text-center max-w-[380px] w-full"
      />
    </div>
    <TestimonialsSlider />
  </div>

  <div class="flex flex-col items-center gap-12 px-5 md:px-20 mb-24">
    <Text
      textStyle="Body6xlBold"
      value="Why Teams Choose YMT"
      class="text-primary text-center mb-12"
    />
    <div class="w-full flex flex-wrap justify-center gap-y-20 gap-6 px-10 md:px-0">
      <FeatureCard
        v-for="(feature, index) in features"
        :key="index"
        :icon-src="feature.iconSrc"
        :icon-alt="feature.title"
        :title="feature.title"
        :description="feature.description"
      />
    </div>
  </div>

  <div class="flex flex-col items-center gap-8 lg:gap-16 mb-24">
    <Text
      textStyle="Body6xlBold"
      value="Compatible with Your Tools"
      class="text-primary text-center"
    />
    <div class="w-full">
      <ToolsSwiper :images="toolsImages"/>
    </div>
  </div>

  <div class="flex flex-col items-center gap-8 lg:gap-12 mb-24 px-5">
    <div
      class="flex flex-col items-center gap-6 max-w-[600px] xl:max-w-[844px]"
    >
      <Text
        textStyle="Body6xlBold"
        value="Pricing That Scales With You"
        class="text-primary text-center"
      />
      <Text
        textStyle="BodyxlMedium"
        value="Buy exactly what you need — starting at just $1 per lead. No subscriptions, no long-term contracts."
        class="text-primary text-center w-full line-clamp-2"
      />
    </div>

    <div class="hidden max-w-fit w-full xl:grid xl:grid-cols-3 xl:gap-14">
      <PricingCard
        v-for="tier in tiers"
        :key="tier.id"
        :tiers="[tier]"
        buttonText="Choose Plan"
      />
    </div>

    <div class="block xl:hidden w-full mt-8">
      <CardSlider />
    </div>
  </div>

  <ScaleImage
    title="AI Lead Generation"
    description="Instantly reach your ideal audience and start converting leads in your industry today."
    button-text="Become an Affiliate"
    button-link="/affiliate"
    :image-src="NotebookLogo"
  />
</template>
