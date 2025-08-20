<script setup lang="ts">
import TextField from '../typography/TextField.vue';
import { defineProps } from 'vue';
import { NuxtImg } from '#components';

interface CardItem {
    image: string;
    title: string;
    text: string;
}
interface Props {
  items: CardItem[];
}

const props = defineProps<Props>();
</script>

<template>
    <div v-for="(item, index) in props.items" :key="index"
        class="w-full max-w-[387px] flex flex-col items-start p-4 bg-white shadow-xl rounded-xl">
        <NuxtImg :src="item.image" :alt="item.title" class="w-full h-full max-w-[351px] max-h-[251px] rounded-xl" />
        <div class="flex flex-col items-start gap-4 mt-4">
            <TextField textStyle="BodyLgBold" :value="item.title" class="text-primary" />
            <TextField textStyle="BodyBaseNormal" :value="item.text" class="text-primary" />
        </div>
    </div>
</template>
