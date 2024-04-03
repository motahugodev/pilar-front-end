<template>
  <section>
    <app-carousel title="Tendências">
      <template v-slot:header>
        <app-tab v-model="period" @update:modelValue="onPeriod" :options="periods"></app-tab>
      </template>
      <swiper-slide v-for="(option, index) in options" :key="index">
        <app-card
          :title="option.original_title || option.original_name"
          :description="option.overview"
          :image="option.poster_path"
          :details="option"
        ></app-card>
      </swiper-slide>
    </app-carousel>
  </section>
</template>
<script setup>
import AppCarousel from '../molecules/AppCarousel.vue'
import AppCard from '../atoms/AppCard.vue'
import AppTab from '../atoms/AppTab.vue'

import { SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

const period = ref(0)

const periods = [
  { label: 'Hoje', type: 'day' },
  { label: 'Nesta semana', type: 'week' }
]

const emit = defineEmits(['period'])

const onPeriod = (index) => {
  emit('period', periods[index].type)
}
 
defineProps({
  options: {
    type: Array,
    default: () => []
  }
})
</script>
<style></style>
