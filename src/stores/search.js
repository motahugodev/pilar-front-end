import { defineStore } from 'pinia'
import { getSearch } from '@/services'

export const useSearchStore = defineStore('search', {
  state: () => {
    return {
      results: []
    }
  },
  actions: {
    async listResults(query) {
      this.results = await getSearch(query)
    }
  }
})
