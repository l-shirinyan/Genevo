<script setup lang="ts">
import Button from "@/components/reusable/button/CustomButton.vue";
import Text from "@/components/reusable/typography/TextField.vue";

interface Props {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt?: string;
}

const props = withDefaults(defineProps<Props>(), {
  imageAlt: "",
  buttonLink: "#",
});
</script>

<template>
  <section
    class="w-full px-3 mb-24 mt-0 2xl:mt-32"
    :style="{
      backgroundImage: `url('/images/generation-bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div
      class="flex flex-col pt-20 lg:pt-0 lg:flex-row items-center justify-center gap-4 lg:gap-0"
    >
      <div
        class="flex flex-col items-center lg:items-start gap-12 lg:gap-16 max-w-[353px] lg:max-w-[567px]"
      >
        <div
          class="flex flex-col items-center text-center lg:items-start lg:text-start gap-6"
        >
          <Text textStyle="title" :value="props.title" class="text-primary" />
          <Text
            textStyle="subtitle"
            :value="props.description"
            class="text-primary"
          />
        </div>

        <div class="w-full max-w-[353px]">
          <NuxtLink :to="buttonLink">
            <Button variant="primary" class="w-full"> {{ buttonText }}</Button>
          </NuxtLink>
        </div>
      </div>

      <div
        class="mt-4 lg:mt-0 origin-bottom 2xl:scale-[1.5] max-w-full scale-100"
      >
        <NuxtImg :src="imageSrc" :alt="imageAlt" class="max-w-full h-auto" />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
