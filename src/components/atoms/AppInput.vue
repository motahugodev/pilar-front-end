<template>
  <div class="flex rounded-md overflow-hidden w-full">
    <input
      type="text"
      :value="value"
      @input="onSearch"
      class="w-full rounded-md rounded-r-none"
    />
    <button
      @click="emit('search')"
      class="bg-gray-100 text-blue-500 px-6 text-lg font-semibold py-4 rounded-r-md"
      :disabled="disabled"
      :class="{ 'bg-gray-200 cursor-not-allowed': disabled }"
    >
      Pesquisar
    </button>
  </div>
</template>
<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'search'])
const onSearch = (el) => {
  const value = el.target.value
  emit('update:modelValue', value)
}
</script>
