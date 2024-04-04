<template>
  <section>
    <app-carousel title="Os Mais Populares">
      <template v-slot:header>
        <app-tab v-model="period" @update:modelValue="onPeriod" :options="periods"></app-tab>
      </template>
      <swiper-slide v-for="(option, index) in options" :key="index">
        <app-card
          :title="option.original_title || option.original_name"
          :description="option.overview"
          :image="option.backdrop_path"
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
  { label: 'Streaming', type: 'streaming' },
  { label: 'Na TV', type: 'tv' },
  { label: 'Para Alugar', type: 'rent' },
  { label: 'Nos Cinemas', type: 'movie' }
]

const emit = defineEmits(['type'])

const onPeriod = (index) => {
  emit('type', periods[index].type)
}
defineProps({
  options: {
    type: Array,
    default: () => []
  }
})
</script>
<style></style>
