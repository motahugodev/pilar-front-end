<template>
  <button type="button">
    <slot></slot>
  </button>
</template>
<style scoped lang="scss">
button {
  @apply 
  inline-flex 
  items-center 
  rounded-md 
  border 
  border-transparent 
  bg-blue-500 
  px-4 
  py-2 
  text-sm 
  font-medium 
  text-white 
  shadow-sm 
  hover:bg-blue-600 
  focus:outline-none 
  focus:ring-2 
  focus:ring-blue-500 
  focus:ring-offset-2;
}
</style>
