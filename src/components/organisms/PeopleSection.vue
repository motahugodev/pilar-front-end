<template>
  <section>
    <app-container>
      <app-carousel title="Elenco da série">
        <template v-slot:header> </template>
        <swiper-slide v-for="(option, index) in options" :key="index">
          <app-card
            :title="option.original_title || option.original_name"
            :description="option.character"
            :image="option.profile_path"
          ></app-card>
        </swiper-slide>
      </app-carousel>
    </app-container>
  </section>
</template>
<script setup>
import AppCarousel from '../molecules/AppCarousel.vue'
import AppCard from '../atoms/AppCard.vue'
import AppContainer from '../atoms/AppContainer.vue'

import { SwiperSlide } from 'swiper/vue'

defineProps({
  options: {
    type: Array,
    default: () => []
  }
})
</script>
<style></style>
