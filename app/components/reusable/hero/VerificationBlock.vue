<script setup lang="ts">
import TextField from "../typography/TextField.vue";
import Button from "../button/CustomButton.vue";
interface Props {
  title: string;
  backgroundImage: string;
  titleClassName?: string;
  showIcon?: boolean;
  imageSrc: string;
  imageAlt: string;
  points?: string[];
  verifiedIcon?: string;
  showButton: boolean;
  buttonText?: string;
  description?: string;
  useList?: boolean;
}

const props = defineProps<Props>();
</script>
<template>
  <div
    class="flex flex-col-reverse gap-8 lg:gap-0 items-center justify-center px-5 py-20 md:flex-row mb-24"
    :style="{
      backgroundImage: `url('${backgroundImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div
      class="flex flex-col items-center gap-8 max-w-[775px] max-h-[499px] w-full h-full"
    >
      <NuxtImg :src="imageSrc" :alt="imageAlt" class="w-full h-full" />

      <Button
        v-if="showButton"
        variant="primary"
        class="w-full block md:hidden max-w-fit [min-width:-webkit-fill-available]"
      >
        {{ buttonText }}
      </Button>
    </div>

    <div class="flex flex-col items-center gap-6 md:items-start">
      <TextField
        textStyle="Body6xlBold"
        :value="title"
        :class="`text-primary text-center md:text-start ${titleClassName}`"
      />

      <ul
        v-if="useList && points?.length"
        class="flex flex-col items-start gap-6"
      >
        <li
          v-for="(point, index) in points"
          :key="index"
          class="flex items-center gap-4"
        >
          <template v-if="props.showIcon">
            <NuxtImg
              :src="verifiedIcon"
              alt="Verify Check Icon"
              class="w-6 h-6"
            />
          </template>
          <template v-else>
            <span
              class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
            ></span>
          </template>
          <TextField
            textStyle="BodyxlMedium"
            :value="point"
            class="text-primary"
          />
        </li>
      </ul>

      <TextField
        v-else-if="description"
        textStyle="BodyxlMedium"
        :value="description"
        class="text-primary text-center max-w-[540px] w-full md:text-start"
      />

      <Button
        v-if="showButton"
        variant="primary"
        class="w-full md:block hidden max-w-[412px]"
      >
        {{ buttonText }}
      </Button>
    </div>
  </div>
</template>
