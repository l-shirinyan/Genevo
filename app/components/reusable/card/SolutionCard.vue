<script setup lang="ts">
import TextField from '../typography/TextField.vue'

interface Props {
  iconSrc: string
  iconAlt?: string
  title: string
  description: string
  titleClass?: string
  iconBgClass?: string
  featureCard?: string
  linkText?: string
  linkHref?: string
  visible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  iconAlt: 'Icon',
  iconBgClass: 'bg-yellow-100'
})
</script>

<template>
  <div
    :class="`w-full max-w-[fit-content] fill-available flex flex-col gap-4 lg:gap-8 lg:max-w-[326px] rounded-xl shadow-md py-5 px-4 ${featureCard}`"
  >
    <div
      :class="[
        'flex items-center justify-center rounded-full w-16 h-16',
        iconBgClass
      ]"
    >
      <NuxtImg
        :src="props.iconSrc"
        :alt="props.iconAlt"
        :width="31"
        :height="31"
      />
    </div>

    <div class="flex flex-col items-start gap-8">
      <TextField
        textStyle="Body3XlBold"
        :value="props.title"
        :class="`text-primary text-nowrap ${titleClass}`"
      />
      <TextField
        textStyle="BodyxlSemibold"
        :value="props.description"
        class="text-secondary"
      />
    </div>

    <div
      v-if="visible"
      class="flex flex-row justify-between items-center"
    >
      <NuxtLink :to="linkHref" class="text-primary text-lg">
        {{ linkText }}
      </NuxtLink>

      <NuxtImg
        :src="iconSrc"
        alt="icon"
        class="w-6 h-6"
      />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .fill-available {
    min-width: -webkit-fill-available;
  }
}
</style>
