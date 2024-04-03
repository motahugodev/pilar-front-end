<script setup>
import AppContainer from '../components/atoms/AppContainer.vue'
import TrendingSection from '../components/organisms/TrendingSection.vue'
import PopularSection from '@/components/organisms/PopularSection.vue'

import { getTreding, getAuthentication, getPopular } from '@/services'
import { ref, onMounted } from 'vue'

const trendings = ref([])
const popular = ref([])

const requestAll = async () => {
  await getAuthentication()
  getTredingPeriod()
  getPopulartype()
}

const getTredingPeriod = async (period = 'day') => {
  trendings.value = await getTreding(period)
}

const getPopulartype = async (type = 'tv') => {
  popular.value = await getPopular(type)
}

onMounted(() => {
  requestAll()
})
</script>
<template>
  <app-container>
    <trending-section @period="getTredingPeriod" :options="trendings"></trending-section>
    <popular-section @type="getPopulartype" :options="popular"></popular-section>
  </app-container>
</template>
