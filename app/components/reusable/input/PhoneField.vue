<template>
  <div class="w-full flex flex-col items-start gap-1">
    <label class="text-lg text-primary font-bold">Phone</label>

    <vue-tel-input
      v-model="phone"
      defaultCountry="us"
      :input-options="{
        placeholder: 'Enter your phone number',
        styleClasses:
           'w-full bg-white text-sm text-primary placeholder:text-secondary placeholder:text-sm p-4 focus:outline-0 rounded-xl border border-cloud-silver'
      }"
       @keypress="onlyNumbers"
      @update:modelValue="onInput"
    />
 
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

function onInput(value: string) {
  emit('update:modelValue', value);
}

function onlyNumbers(event: KeyboardEvent) {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
}
</script>

<style>
.vue-tel-input{
    width: 100%;
    border:1px solid #D4D6DB;
    border-radius: 12px;
}
.vue-tel-input:focus{
    outline: none !important;
    border: none !important;
}
.vue-tel-input:focus-within {
    box-shadow: none !important;
    border-color: transparent;
}
.vti__input{
    border-radius:0 12px 12px 0;
}
.vti__dropdown{
    background: white;
    border-right: 1px solid #D4D6DB !important;
    border-radius: 12px 0 0 12px
}
</style> 
