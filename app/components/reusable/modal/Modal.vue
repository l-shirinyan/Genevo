<script setup lang="ts">
import { Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

interface Props {
  modelValue: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const close = () => emit('update:modelValue', false)
</script>

<template>
  <Dialog :open="props.modelValue" @close="close" class="relative z-50">
    <DialogOverlay class="fixed inset-0 bg-black/50 transition-opacity" />

    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <DialogPanel
        class="relative w-full max-w-3xl transform rounded-xl bg-white p-6 text-left shadow-xl transition-all">
        <button type="button" @click="close"
         class="absolute right-3 top-3 rounded-full p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:outline-none">
          <XMarkIcon class="w-6 h-6" />
        </button>

        <slot />
      </DialogPanel>
    </div>
  </Dialog>
</template>
