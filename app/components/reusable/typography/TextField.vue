<script setup lang="ts">
import { ref, computed } from "vue";

export type TextStyle =
  | "Body6xlBold"
  | "BodyxlMedium"
  | "Body2xlBold"
  | "Body2xlSemibold"
  | "Body2xlNormal"
  | "BodyXLNormal"
  | "Body3XlBold"
  | "BodyxlSemibold"
  | "BodyLgNormal";


const props = defineProps<{
  textStyle: TextStyle;
  value: string | number;
  className?: string;
}>();

const textRef = ref<HTMLElement | null>(null);

const styleClass = computed(() => {
  let baseClass = props.className ? `${props.className} ` : "";
  switch (props.textStyle) {
    case "Body6xlBold":
      baseClass += "text-3xl md:text-5xl xl:text-6xl font-bold";
      break;
    case "BodyxlMedium":
      baseClass += "text-base md:text-lg xl:text-xl font-medium";
      break;
    case "Body2xlBold":
      baseClass += "text-base md:text-lg xl:text-2xl font-bold";
      break;
    case "Body2xlSemibold":
      baseClass +='text-base xl:text-2xl font-semibold';
      break;
     case "Body2xlNormal":
      baseClass += "text-base md:text-lg xl:text-2xl font-normal";
      break;
    case "BodyXLNormal":
      baseClass += "text-base xl:text-xl font-normal";
      break;
    case "Body3XlBold":
      baseClass += "text-xl md:text-2xl xl:text-3xl font-bold";
      break;
    case "BodyxlSemibold":
      baseClass += "text-base font-semibold";
      break;
    case "BodyLgNormal":
      baseClass += "text-base lg:text-lg font-normal";
      break;
  }
  return baseClass;
});

defineExpose({ textRef });
</script>

<template>
  <div :class="styleClass" ref="textRef">
    {{ value }}
  </div>
</template>
