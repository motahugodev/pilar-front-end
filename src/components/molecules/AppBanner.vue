<template>
  <section class="app-banner">
    <div
      class="app-banner__backdrop"
      v-lazy:background-image="`${baseUrlImage}${details.backdrop_path}`"
    ></div>
    <div class="app-banner__overlay"></div>
    <app-container class="app-banner__container">
      <div class="app-banner__image">
        <img v-lazy="baseUrlImage + details.poster_path" alt="" srcset="" />
      </div>
      <div class="flex-1">
        <div class="app-banner__info">
          <div>
            <h2>{{ details.name || details.title }}</h2>
            <div class="flex space-x-2">
              <p v-for="item in details.genres" :key="item.id">{{ item.name }}</p>
            </div>
          </div>
          <div></div>
          <div class="space-y-2">
            <span>{{ details.tagline }}</span>
            <h3>Sinopse</h3>
            <p>{{ details.overview }}</p>
            <div class="grid grid-cols-2 pt-3 gap-y-4">
              <div v-for="item in details.created_by" :key="item.id">
                <h4>{{ item.name }}</h4>
                <p>Criação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-container>
  </section>
</template>
<script setup>
import AppContainer from '../atoms/AppContainer.vue'
const baseUrlImage = 'https://image.tmdb.org/t/p/original'

defineProps({
  details: {
    type: Object,
    default: () => {}
  }
})
</script>
<style scoped lang="scss">
.app-banner {
  @apply relative;

  &__overlay {
    @apply absolute bg-gradient-to-r from-cyan-500/25 to-blue-500/40 w-full h-full backdrop-blur-sm;
  }

  &__backdrop {
    @apply absolute w-full h-full bg-center bg-cover z-0;
  }

  &__container {
    @apply md:flex flex-none space-x-6 py-6 relative;
  }
  &__image {
    @apply rounded-md overflow-hidden flex justify-center pb-6 md:pb-0;

    img {
      @apply md:min-w-72 w-56 md:h-96 h-72;
    }
  }
  &__info {
    @apply space-y-3 text-gray-100;

    span {
      @apply text-sm text-gray-300 italic;
    }
    h2 {
      @apply text-3xl font-bold;
    }
    h3 {
      @apply text-base font-bold;
    }
    p {
      @apply text-sm;
    }
    h4 {
      @apply text-sm font-bold;
    }
  }
}
</style>
