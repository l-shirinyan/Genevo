<script setup lang="ts">
import Text from "@/components/reusable/typography/TextField.vue";

interface InfoCardType {
  icon?: any;
  title: string;
  text: string;
}

const props = defineProps<InfoCardType>();
</script>

<template>
  <div
    class="w-full max-w-[616px] flex items-center gap-3 bg-white p-3 rounded-lg shadow-2xl"
  >
    <div
      class="min-w-8 min-h-8 md:min-w-12 md:min-h-12 lg:min-w-[63px] lg:min-h-[63px]"
    >
      <NuxtImg
        :src="props.icon"
        :alt="props.icon || 'image'"
        class="w-full h-full"
      />
    </div>
    <div class="w-[1px] self-stretch bg-secondary-light"></div>
    <div class="flex flex-col items-start gap-3">
      <Text textStyle="cardtitle" :value="props.title" class="text-primary" />
      <Text textStyle="cardtext" :value="props.text" class="text-secondary" />
    </div>
  </div>
</template>
