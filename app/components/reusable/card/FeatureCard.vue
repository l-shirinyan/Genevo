<script setup lang="ts">
import Text from "@/components/reusable/typography/TextField.vue";

interface Props {
  iconSrc: string;
  iconAlt?: string;
  title: string;
  description: string;
  titleClass?:string;
  iconBgClass?: string;
  linkText?: string;
  linkHref?: string;
  visible?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  iconAlt: "Icon",
  iconBgClass: "bg-yellow-100",
});
</script>

<template>
  <div
    class="relative w-full max-w-[fit-content] fill-available fill-xl-available lg:max-w-[450px] rounded-xl shadow-md py-10 lg:py-16 px-8"
  >
    <div
      :class="[
        'absolute left-1/2 p-3 lg:p-0 -translate-x-1/2 flex items-center justify-center rounded-full',
        'lg:w-[103px] lg:h-[103px] -top-[10%] sm:-top-[20%] :w-[61px] h-[61px]',
        iconBgClass,
      ]"
    >
      <NuxtImg
        :src="props.iconSrc"
        :alt="props.iconAlt"
        :width="39"
        :height="39"
        class="lg:w-[50px] lg:h-[50px]"
      />
    </div>
    <div
      class="flex flex-col items-center text-center gap-8 sm:gap-5 mt-5 lg:mt-7"
    >
      <Text
        textStyle="Body3XlBold"
        :value="props.title"
        :class="`text-primary text-nowrap ${titleClass}`"
      />
      <Text
        textStyle="BodyxlSemibold"
        :value="props.description"
        class="text-secondary"
      />

    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 778px) {
  .fill-available {
    min-width: -webkit-fill-available;
    min-width: stretch;
  }
}
@media screen and (max-width:1083px){
  .fill-xl-available {
  min-width: -webkit-fill-available !important;
}
}
</style>
