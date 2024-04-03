<template>
  <div class="flex items-center justify-center">
    <div class="max-w-md">
      <div class="flex space-x-4 p-1 bg-gray-200 border border-gray-300 rounded-full">
        <button
          v-for="(option, key) in options"
          :key="key"
          @click="onSelect(key)"
          :class="{ 'bg-blue-500 text-white': modelValue === key }"
          class="flex-1 py-2 px-4 whitespace-nowrap rounded-full focus:outline-none focus:shadow-outline-blue transition-all duration-300 text-xs"
        >
          {{ option.label }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['modelValue'])

defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  }
})

const onSelect = (index) => {
  emit('update:modelValue', index)
}
</script>
<style scoped></style>
