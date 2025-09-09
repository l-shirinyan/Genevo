<script setup lang="ts">
import { toolsImages, productData, faqData, leadData } from "@/constants/data";
import FeatureCard from "@/components/reusable/card/FeatureCard.vue";
import ToolsSwiper from "@/components/reusable/slider/ToolsSlide.vue";
import ScaleImage from "@/components/reusable/scale/ScaleImage.vue";
import LaptopLogo from "/images/laptop.png";
import VerificationBlock from "~/components/reusable/hero/VerificationBlock.vue";
import TextField from "@/components/reusable/typography/TextField.vue";
import Button from "~/components/reusable/button/CustomButton.vue";
import Accordion from "~/components/reusable/accordion/Accordion.vue";
import ProductSlider from "~/components/reusable/slider/ProductSlider.vue";
import LeadsSwiper from "~/components/reusable/slider/IndustriesSlider.vue";
import { getProducts } from "~/composables/api/products";
const showSwiper = ref(false);

const { data: products } = await getProducts();

</script>

<template>

    <div class="flex flex-col items-center xl:flex-row xl:justify-center px-5 py-25 md:px-20 mb-24 gap-12 xl:gap-0 bg-[url('/images/product-mobile-bg.png')]
         md:bg-[url('/images/product-tablet-bg.png')]
         lg:bg-[url('/images/product-desktop-bg.png')]
         bg-cover bg-center">
        <div class="flex flex-col items-start gap-16">
            <div class="flex flex-col items-center text-center xl:text-start xl:items-start gap-6">
                <TextField textStyle="Body6xlBold" value="Everything You Need to Find, Nurture & Close More Leads"
                    class="text-primary w-full max-w-[912px]" />
                <TextField textStyle="BodyxlMedium"
                    value="YMT automates prospecting, enriches contacts, scores leads, and syncs it all into your CRM — so your team focuses on closing, not chasing."
                    class="text-primary w-full max-w-[716px]" />
            </div>

            <div class="hidden xl:flex xl:flex-row xl:items-center xl:justify-center gap-4">
                <Button variant="primary">Become an Affiliate</Button>
                <Button variant="white" class-name="w-[216px]">Purchase Leads</Button>
            </div>

        </div>

        <NuxtImg src="/images/iPhone.png" alt="Telephone" class="max-w-[564px] max-h-[472px] w-full h-full xl:mt-25" />

        <div class="flex gap-3 flex-row items-center xs-col xl:hidden">
            <Button variant="primary">Become an Affiliate</Button>
            <Button variant="white" class-name="w-[216px]">Purchase Leads</Button>

        </div>
    </div>

    <div class="flex flex-col items-center gap-12 px-5 md:px-20 mb-24">
        <div class="flex flex-col items-center text-center gap-6 mb-12">
            <TextField textStyle="Body6xlBold" value="Who Is This Built For?" class="text-primary" />
            <TextField textStyle="BodyxlMedium"
                value="Whether you sell, scale, or recruit — YMT helps you reach the people who matter."
                class="text-primary w-full max-w-[628px]" />

        </div>
        <div class="w-full flex flex-wrap justify-center gap-y-20 gap-6 px-10 md:px-0">
            <FeatureCard v-for="(item, index) in productData" :key="index" :icon-src="item.iconSrc"
                :icon-alt="item.title" :title="item.title" :description="item.description" />
        </div>
    </div>

    <div class="flex flex-col items-center gap-12 px-5 mb-24">
        <div class="flex flex-col items-center text-center gap-6">
            <TextField textStyle="Body6xlBold" value="Industries We Serve" class="text-primary" />
            <TextField textStyle="BodyxlMedium"
                value="From solar to healthcare to legal — we offer targeted leads across 12+ verticals. Pick what fits your business and start closing."
                class="text-primary w-full max-w-[716px]" />
        </div>
        <LeadsSwiper v-if="products && products.length" :items="products" />
    </div>

    <VerificationBlock
        title="Every Lead Is Verified and Scored"
        titleClassName="max-w-[630px] w-full"
        backgroundImage="/images/verification-bg.png"
        imageSrc="/images/iPhone.png"
        imageAlt="Iphone"
        description="From contact verification to intent scoring, we ensure every lead is worth your time."
        verifiedIcon='/icons/verified.svg'
        :showButton="false"
        :useList="false" />

    <div class="flex flex-col items-center gap-12 px-5 md:px-20 mb-24">
        <div class="flex flex-col items-center text-center gap-6">
            <TextField textStyle="Body6xlBold" value="Explore Our Lead Product Catalog" class="text-primary" />
            <TextField textStyle="BodyxlMedium"
                value="AI, verified, or custom leads — all vetted and transparently priced."
                class="text-primary w-full " />
        </div>

        <Accordion :items="faqData" />
    </div>




    <div class="flex flex-col items-center text-center gap-12 px-5 mb-24">
  <div class="flex items-start justify-center max-w-[983px]">
    <NuxtImg
      src="/images/quote-filled.png"
      alt="Quotes"
      class="w-8 h-8 md:w-[51px] md:h-[51px] lg:w-[67px] lg:h-[67px] shrink-0"
    />
    <TextField
      textStyle="Body6xlBold"
      value="Hear from Teams Like Yours, See how we’ve made an impact."
      class="text-primary text-center"
    />
  </div>

  <div class="w-full">
    <ProductSlider />
  </div>
</div>


    <div class="flex flex-col items-center gap-8 lg:gap-16 mb-24">
        <TextField textStyle="Body6xlBold" value="Compatible with Your Tools" class="text-primary text-center" />
        <div class="w-full">
            <ToolsSwiper :images="toolsImages" />
        </div>
    </div>

    <ScaleImage title="See It in Action"
        extraClassName="pt-10"
        description="From filtering to outreach — here's how your team will use YMT, step by step."
        button-text="Become an Affiliate" button-link="/affiliate" :image-src="LaptopLogo" />
</template>
