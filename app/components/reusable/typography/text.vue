<script setup lang="ts">
import { ref, computed } from 'vue'


export type TextStyle = 'title' | 'subtitle' | 'cardtitle' | 'cardtext' | 'featuretitle' | 'featuretext'

const props = defineProps<{
  textStyle: TextStyle
  value: string | number
  className?: string
}>()


const textRef = ref<HTMLElement | null>(null)


const styleClass = computed(() => {
  let baseClass = props.className ? `${props.className} ` : ''
  switch (props.textStyle) {
    case 'title':
      baseClass += 'text-3xl md:text-5xl xl:text-6xl font-bold'
      break;
     case 'subtitle':
      baseClass += 'text-base md:text-lg xl:text-xl font-medium'
      break
     case 'cardtitle':
      baseClass += 'text-base md:text-lg xl:text-2xl font-bold'
      break
       case 'cardtext':
      baseClass += 'text-sm xl:text-xl font-normal'
      break
    case 'featuretitle':
      baseClass += 'text-xl md:text-2xl xl:text-3xl font-bold'  
      break
       case 'featuretext':
      baseClass += 'text-base lg:text-xl font-semibold' 
      break
  }
  return baseClass
})


defineExpose({ textRef })
</script>

<template>
  <div :class="styleClass" ref="textRef">
    {{ value }}
  </div>
</template>
