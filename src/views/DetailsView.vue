<template>
  <div>
    <app-banner :details="details"></app-banner>
    <people-section  :options="credits.cast"></people-section>
  </div>
</template>
<script setup>
import PeopleSection from '@/components/organisms/PeopleSection.vue'
import AppBanner from '../components/molecules/AppBanner.vue'
import { getDetails, getCredits } from '@/services'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const { params, name } = useRoute()

const id = params.slug.split('-')[0]

const details = ref({})
const credits = ref({})

const requestAll = async () => {
  details.value = await getDetails({ type: name.toLowerCase(), id })
  credits.value = await getCredits({ type: name.toLowerCase(), id })
  console.log('🚀 ~ requestAll ~ credits.value:', credits.value)
}

onMounted(() => {
  requestAll()
})
</script>
<style scoped></style>
