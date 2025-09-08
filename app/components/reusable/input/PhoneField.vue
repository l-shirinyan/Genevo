<template>
  <div class="w-full flex flex-col items-start gap-1">
    <label class="text-lg text-primary font-bold">Phone</label>

    <vue-tel-input
      v-model="defaultValue"
      defaultCountry="us"
      :input-options="{
        placeholder: 'Enter your phone number',
        styleClasses:
          'w-full bg-white text-sm text-primary placeholder:text-secondary placeholder:text-sm p-4 focus:outline-0 rounded-xl border border-cloud-silver',
      }"
      @keypress="onlyNumbers"
      autocomplete=""
      @input="onInput"
    />
    <p v-if="error" class="text-red-600 text-sm">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const defaultValue = ref("")
const props = defineProps<{
  modelValue: string;
  error: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "blur"): void;
}>();

function onInput() {
  emit("update:modelValue", defaultValue.value);
}

function onlyNumbers(event: KeyboardEvent) {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
}

onMounted(() => {
  defaultValue.value = props.modelValue
})

watch(() => props.modelValue, () => {
  defaultValue.value = props.modelValue
})
</script>

<style>
.vue-tel-input {
  width: 100%;
  border: 1px solid #d4d6db;
  border-radius: 12px;
}
.vue-tel-input:focus {
  outline: none !important;
  border: none !important;
}
.vue-tel-input:focus-within {
  box-shadow: none !important;
  border-color: transparent;
}
.vti__input {
  border-radius: 0 12px 12px 0;
}
.vti__dropdown {
  background: white;
  border-right: 1px solid #d4d6db !important;
  border-radius: 12px 0 0 12px;
}
</style>
