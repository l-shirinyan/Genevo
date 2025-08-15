<script setup lang="ts">
import Text from '~/components/reusable/typography/text.vue'

interface Props {
  iconSrc: string
  iconAlt?: string
  title: string
  description: string
  iconBgClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconAlt: 'Icon',
  iconBgClass: 'bg-yellow-100'
})
</script>

<template>
  <div class="relative w-full max-w-[fit-content] fill-available  lg:max-w-[326px] rounded-xl shadow-md py-10 lg:py-16 px-4 ">
    <div
      :class="[
        'absolute left-1/2 p-3 lg:p-0 -translate-x-1/2 flex items-center justify-center rounded-full',
        'lg:w-[103px] lg:h-[103px] -top-[20%] :w-[61px] h-[61px]',
        iconBgClass
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

    <div class="flex flex-col items-center text-center gap-8 sm:gap-5 mt-5 lg:mt-7">
    <Text textStyle="featuretitle" :value="props.title" class="text-primary text-nowrap" />
    <Text textStyle="featuretext" :value="props.description" class="text-secondary " />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width:778px){
  .fill-available {
  min-width: -webkit-fill-available;
  min-width: fill-available;
}
}
</style>