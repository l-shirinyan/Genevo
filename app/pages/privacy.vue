<script setup lang="ts">
import Button from "@/components/reusable/button/CustomButton.vue";
import TextField from "~/components/reusable/typography/TextField.vue";
import { privacyData } from "~/constants/data";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-12 py-48 md:py-40 lg:py-50 px-5"
    :style="{
            backgroundImage: `url('/images/privacy-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }"
  >
    <div class="flex flex-col items-center gap-6">
      <TextField
        textStyle="Body6xlBold"
        value="Privacy Policy"
        class="text-primary text-center"
      />
      <TextField
        textStyle="BodyxlMedium"
        value="How We Protect Your Data, Ensure Transparency, and Respect Your Privacy"
        class="text-primary text-center max-w-[500px] w-full"
      />
    </div>
    <Button variant="primary" class="w-full max-w-max md:max-w-80">
      Contact Privacy Team
    </Button>
  </div>

  <div
    class="flex flex-col items-center gap-16 py-10 px-5 md:px-20 lg:gap-24"
       :style="{
            backgroundImage: `url('/images/policy-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }"
  >
    <div
      v-for="(item, index) in privacyData"
      :key="index"
      class="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start lg:justify-start"
    >
      <TextField
        textStyle="Body3XlBold"
        :value="item.title"
        class="text-primary text-center text-nowrap w-full lg:min-w-[412px] lg:text-start"
      />
      <TextField
        textStyle="BodyxlMedium"
        :value="item.text"
        class="text-primary text-center lg:text-start max-w-max lg:max-w-[850px] w-full"
      />
    </div>
  </div>
</template>