<template>
  <div class="app-input">
    <input type="text" :value="value" @input="onSearch" class="" />
    <button
      @click="emit('search')"
      class=""
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
<style scoped lang="scss">
.app-input {
  @apply flex rounded-md overflow-hidden w-full;
  input {
    @apply w-full rounded-full rounded-r-none border border-gray-100 focus:ring-blue-500 focus:ring-offset-2;
  }
  button {
    @apply bg-gray-100 text-blue-500 px-6 text-lg font-semibold py-4 rounded-r-full;
  }
}
</style>
