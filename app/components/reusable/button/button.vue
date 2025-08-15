<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'default' | 'white'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'default',
  className: ''
})

const baseStyles = 'rounded-lg transition-colors duration-300 ease-in-out'

const variants: Record<string, string> = {
  primary:
    'bg-primary text-white text-base md:text-xl font-normal px-10 py-2.5 hover:bg-blue hover:shadow-2xl text-nowrap hover:cursor-pointer',
  white:
    'bg-white text-primary border border-primary text-base md:text-xl font-normal px-10 py-2.5 text-nowrap hover:bg-primary hover:text-white hover:shadow-2xl hover:cursor-pointer',
  default:
    'flex w-full items-center justify-center text-base md:text-xl text-nowrap bg-deep-blue border border-white px-9 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white hover:text-deep-blue hover:border-deep-blue hover:cursor-pointer'
}

const buttonClass = computed(
  () => `${baseStyles} ${variants[props.variant]} ${props.className}`
)
</script>

<template>
  <button :type="props.type" :class="buttonClass">
    <slot />
  </button>
</template>
