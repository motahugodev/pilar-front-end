<template>
  <section class="py-8">
    <div class="grid xl:grid-cols-6 grid-cols-2 lg:grid-cols-4 md:gap-6 gap-2">
      <app-card
        v-for="(item, index) in list"
        :key="index"
        :title="item.original_title || item.original_name"
        :description="item.overview"
        :image="item.backdrop_path"
        :details="item"
      ></app-card>
    </div>

    <div v-if="list.length == 0">
      <h2 class="text-xl font-semibold text-center">Item não encontrado</h2>
    </div>
  </section>
</template>
<script setup>
import AppCard from '../atoms/AppCard.vue'

defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>
<style scoped></style>
