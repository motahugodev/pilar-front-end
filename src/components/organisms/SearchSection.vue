<template>
  <section class="search-section">
    <app-container>
      <h2>Buscar por um filme, Série ou Pessoa</h2>
      <app-input
        @search="onSearch"
        :value="search"
        :disabled="search.length < 3"
        v-model="searchQuery"
      ></app-input>

    </app-container>
  </section>
</template>
<script setup>
import AppInput from '@/components/atoms/AppInput.vue'
import AppContainer from '../atoms/AppContainer.vue'
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useSearchStore } from '@/stores/search'

const store = useSearchStore()

const router = useRouter()
const route = useRoute()

const search = ref('')

const searchQuery = computed({
  get() {
    return route.query.query
  },
  set(newValue) {
    search.value = newValue
  }
})

const onSearch = () => {
  if (route.name != 'Search') {
    router.push({
      name: 'Search',
      query: {
        query: search.value
      }
    })
  } else {
    store.listResults(search.value)
  }
}
</script>
<style lang="scss">
.search-section {
  @apply bg-gradient-to-r from-cyan-500 to-blue-500 py-8 px-4 md:px-0;

  h2 {
    @apply text-3xl font-semibold text-gray-100 pb-2;
  }
}
</style>
