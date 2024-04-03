<template>
  <app-container> <cards-search :list="store.results" /></app-container>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import CardsSearch from '@/components/organisms/CardsSearch.vue'
import AppContainer from '@/components/atoms/AppContainer.vue'
import { useSearchStore } from '@/stores/search'

const store = useSearchStore()
const { query } = useRoute()

onMounted(() => {
  if (!query.query) return
  store.listResults(query.query)
})
</script>
<style scoped></style>
