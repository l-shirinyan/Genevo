<script setup lang="ts">
import TextField from '~/components/reusable/typography/TextField.vue'
import Button from '~/components/reusable/button/CustomButton.vue'
import ContactForm from '~/components/reusable/form/Form.vue'
import { about, tags, values } from '~/constants/data'
import SolutionCard from '~/components/reusable/card/SolutionCard.vue'
import AboutSlider from '~/components/reusable/slider/AboutSlider.vue'
</script>

<template>
  <div
    class="flex flex-col items-center py-20 px-5 lg:px-20 mb-24 bg-[url('/images/about-mobile-bg.png')] lg:bg-[url('/images/about-bg.png')] bg-cover bg-center"
  >
    <div class="flex flex-col items-center gap-14 mb-10 md:mb-0">
      <div class="flex flex-col items-center text-center gap-6">
        <TextField
          textStyle="Body6xlBold"
          value="Everything You Need to Find, Nurture & Close More Leads"
          class="text-primary max-w-[912px] w-full"
        />
        <TextField
          textStyle="BodyxlMedium"
          value="Explore AI-powered tools, verified leads, and expert support built to drive measurable results."
          class="text-primary max-w-[654px] w-full"
        />
      </div>
      <Button variant="primary" class="w-full max-w-[300px] hidden md:block">
        Start Now
      </Button>
    </div>

    <div class="relative w-full flex justify-center md:-mt-11 xl:-mt-20 image-scale">
      <NuxtImg
        src="/images/diagrams-desktop.png"
        alt="Diagrams"
        class="hidden md:block w-full h-full xl:max-w-320 lg:scale-110"
      />

      <NuxtImg
        src="/images/diagrams-mobile.png"
        alt="Diagrams"
        class="block md:hidden w-full h-auto"
      />
    </div>

    <Button variant="primary" class="w-full max-w-[300px] block md:hidden mt-10">
      Start Now
    </Button>
  </div>

  <div class="flex flex-col items-center justify-center gap-12 px-5 md:px-20 mb-24">
    <div class="w-full flex flex-col items-center gap-12 xl:flex-row xl:justify-center xl:gap-12">
      <div class="flex flex-col items-center lg:items-start lg:gap-14">
        <div
          class="flex flex-col items-center text-center pl-4 border-l border-yellow lg:text-start lg:items-start gap-6"
        >
          <TextField textStyle="Body6xlBold" value="Our Mission & Goal" class="text-primary" />
          <TextField
            textStyle="BodyxlMedium"
            value="We aim to lead the future of lead generation by delivering industry-specific solutions that adapt to real workflows—built for speed, scale, and ROI, not just tracking."
            class="text-primary max-w-[586px]"
          />
        </div>
        <Button variant="primary" class="w-full hidden xl:block"> Start Now </Button>
      </div>
      <div class="lg:w-1/2 w-full">
        <NuxtImg
          src="/images/MacBook.png"
          alt="Notebook"
          class="w-full h-full max-w-max m-auto max-h-[340px] xl:max-h-none"
        />
      </div>
      <Button variant="primary" class="w-full block xl:hidden"> Start Now </Button>
    </div>
  </div>

  <div class="flex flex-col items-center gap-12 px-5 mb-24">
     <div class="flex flex-col items-center text-center gap-6">
      <TextField textStyle="Body6xlBold" value="Our Vision" class="text-primary" />
      <TextField
        textStyle="BodyxlMedium"
        value="We take a vertical-specific, use-case-driven approach to lead generation. Rather than forcing teams to adapt, our platform fits around your process — enabling scale, flexibility, and measurable impact."
        class="text-primary max-w-[758px]"
      />
    </div>
    <AboutSlider />
  </div>

  <div
    class="flex flex-col items-center gap-12 px-5 md:px-20 mb-24"
    :style="{
      backgroundImage: `url('/images/our-story-background.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div
      class="flex flex-col lg:flex-row items-center bg-cloud-white rounded-4xl overflow-hidden p-6 lg:p-8 gap-8 lg:gap-12"
      style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    >
      <div class="hidden flex-1 lg:block lg:w-1/2 w-full">
        <NuxtImg
          src="/images/our-story.png"
          alt="Our Story"
          class="rounded-2xl object-cover w-full h-full max-h-[340px] lg:max-h-none"
        />
      </div>

      <div class="flex flex-col flex-1 gap-7 xl:gap-20 lg:justify-between lg:w-1/2 w-full">
        <div class="flex flex-col items-center text-center lg:items-start lg:text-start gap-9">
          <TextField textStyle="Body6xlBold" value="Our Story" class="text-primary" />
          <TextField
            textStyle="BodyxlMedium"
            value="What began as a small team passionate about sales automation has grown into a trusted partner for companies across industries. We've helped professionals scale faster with verified leads and smarter outreach tools — delivering results that matter."
            class="text-primary"
          />
        </div>

        <div class="block flex-1 lg:hidden lg:w-1/2 w-full">
          <NuxtImg
            src="/images/our-story.png"
            alt="Our Story"
            class="rounded-2xl object-cover w-full h-full max-h-[340px] lg:max-h-none"
          />
        </div>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="px-5 lg:px-8 py-2.5 text-primary border border-secondary rounded-full text-base font-medium"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center gap-12 px-5 md:px-20 mb-24">
    <div class="flex flex-col items-center text-center gap-6">
      <TextField textStyle="Body6xlBold" value="Why Choose US" class="text-primary" />
      <TextField
        textStyle="BodyxlMedium"
        value="We don’t just provide leads — we partner in your growth. Our tailored solutions are designed for performance and backed by years of experience"
        class="text-primary max-w-[735px]"
      />
    </div>
    <div class="w-full max-w-[1280px] grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      <SolutionCard
        v-for="(item, index) in about"
        :key="index"
        :icon-src="item.iconSrc"
        :icon-alt="item.title"
        :title="item.title"
        :description="item.description"
        featureCard="!max-w-none w-full"
      />
    </div>
  </div>

  <div class="flex flex-col items-center gap-12 px-5 md:px-20 mb-24">
    <div class="flex flex-col items-center text-center gap-6">
      <TextField textStyle="Body6xlBold" value="Our Values" class="text-primary" />
      <TextField
        textStyle="BodyxlMedium"
        value="We don’t just provide leads — we partner in your growth. Our tailored solutions are designed for performance and backed by years of experience"
        class="text-primary max-w-[735px]"
      />
    </div>
    <div class="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-6">
      <div class="flex flex-col items-start gap-10">
        <div class="flex flex-col gap-8">
          <div
            v-for="(item, index) in values"
            :key="index"
            class="flex flex-row items-start gap-4"
          >
            <div
              class="flex items-center justify-center rounded-full min-w-12 min-h-12 lg:min-w-16 lg:min-h-16 bg-yellow-100"
            >
              <NuxtImg :src="item.icon" :alt="item.alt" class="w-8 h-8 lg:w-11 lg:h-11" />
            </div>
            <span class="w-[1px] self-stretch rounded-xs bg-frosted-gray"></span>
            <div class="flex flex-col items-start gap-2">
              <TextField textStyle="Body2xlBold" :value="item.title" class="text-primary" />
              <TextField textStyle="BodyLgSemiBold" :value="item.description" class="text-secondary" />
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-3/4 w-full">
        <NuxtImg
          src="/images/our-values.png"
          alt="Our Story"
          class="rounded-2xl object-cover w-full h-full max-h-[340px] lg:max-h-none"
        />
      </div>
    </div>
  </div>

  <ContactForm desktopBg="/images/company-form-bg.png" />
</template>

<style scoped>
@media (min-width: 1600px) {
  .image-scale {
    width: 1280px;
  }
}
</style>