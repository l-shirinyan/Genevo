<script setup lang="ts">
import TextField from "@/components/reusable/typography/TextField.vue";
defineProps<{
    testimonialText: string;
    userImage: string;
    userName: string;
    userHandle: string;
}>();
</script>

<template>
    <div
        class="w-full h-full  max-w-[540px] flex flex-col justify-between shadow-xl items-start bg-white rounded-xl p-8">
        <TextField textStyle="Body2xlMedium" :value="testimonialText" class="text-primary text-left mb-12" />

        <div class="flex flex-row justify-items-start align-bottom items-center gap-2 sm:gap-6">
            <NuxtImg :src="userImage" alt="User"
                class="w-full h-full min-w-12 min-h-12 lg:min-w-20 lg:min-h-20 rounded-full" />
            <div class="flex flex-col items-start gap-1">
                <TextField :textStyle="'BodyxlMedium'" :value="userName" class="text-primary" />
                <TextField :textStyle="'BodyLgSemiBold'" :value="userHandle" class="text-secondary" />
            </div>
        </div>
    </div>
</template>