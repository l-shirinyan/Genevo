<script setup lang="ts">
import { defineProps } from "vue";
import Text from "@/components/reusable/typography/TextField.vue";
import Button from "@/components/reusable/button/CustomButton.vue";
import { NuxtImg } from "#components";

interface Props {
  title: string;
  subtitle: string;
  buttonTexts: [string, string?];
  backgroundImage: string;
  imageSrc?: string;
  imageAlt?: string;
  button1Class?: string;
  button2Class?: string;
  backgroundPosition?: string;
  extraClasses?: string;
  textClasses?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center px-5 py-12 lg:px-28 gap-12 lg:flex-row lg:justify-center lg:items-center mb-24"
    :style="{
      backgroundImage: `url(${props.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: props.backgroundPosition || 'center',
    }"
  >
    <div
      :class="`flex flex-col items-start gap-16 ${props.extraClasses || ''}`"
    >
      <div
        class="max-w-[590px] mx-auto lg:mx-0 flex flex-col items-center text-center gap-6 lg:text-start lg:items-start"
      >
        <Text textStyle="title" :value="props.title" class="text-primary" />
        <Text
          textStyle="subtitle"
          :value="props.subtitle"
          :class="`text-primary ${props.textClasses}`"
        />
      </div>

      <div
        class="hidden lg:flex lg:flex-row lg:items-center lg:justify-center gap-4"
      >
        <Button variant="primary" :className="props.button1Class">{{
          props.buttonTexts[0]
        }}</Button>
        <Button
          variant="white"
          v-if="props.buttonTexts[1]"
          :className="props.button2Class"
          >{{ props.buttonTexts[1] }}</Button
        >
      </div>
    </div>

    <NuxtImg
      v-if="props.imageSrc"
      :src="props.imageSrc"
      :alt="props.imageAlt || 'image'"
      class="max-w-[564px] max-h-[472px] w-full h-full"
    />

    <div class="flex xs-display gap-3 flex-row items-center lg:hidden">
      <Button variant="primary" :className="`w-full ${props.button1Class}`">{{
        props.buttonTexts[0]
      }}</Button>
      <Button
        variant="white"
        v-if="props.buttonTexts[1]"
        :className="`w-full ${props.button2Class}`"
        >{{ props.buttonTexts[1] }}</Button
      >
    </div>
  </div>
</template>
