<template>
  <div class="w-full flex flex-col items-start gap-1">
    <div class="w-full flex flex-col items-start gap-3">
      <label v-if="label" :for="inputId" class="text-lg text-primary font-bold">
        {{ label }}
      </label>

      <input
        :id="inputId"
        :type="type"
        :placeholder="placeholder"
        :class="[
          'w-full border bg-white text-sm text-primary placeholder:text-secondary placeholder:text-sm rounded-xl p-4 focus:outline-0',
          inputClass,
          error ? 'border-red-600' : 'border-cloud-silver',
        ]"
        :value="modelValue"
        @input="onInput"
        @blur="onBlur"
      />
    </div>
    <p v-if="error" class="text-red-600 text-sm">{{ error }}</p>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  label?: string;
  placeholder?: string;
  inputId?: string;
  type?: string;
  modelValue: string;
  inputClass?: string;
  error?: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'blur', event: Event): void
}>()

function onBlur(event: Event) {
  emit('blur', event)
}

function onInput(event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (target) {
    emit("update:modelValue", target.value);
  }
}
</script>
