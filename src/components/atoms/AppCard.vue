<template>
  <div class="app-card">
    <div class="app-card__image">
      <slot name="header"></slot>
      <div class="app-card__image__item" v-lazy:background-image="`${baseUrlImage}${image}`"></div>
    </div>
    <div class="app-card__footer">
      <slot name="footer"></slot>
      <RouterLink :to="redirect()">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
const baseUrlImage = 'https://image.tmdb.org/t/p/original'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  details: {
    type: Object,
    default: () => {}
  }
})

const redirect = () => {
  const parseName = props.title.replaceAll(' ', '-').toLowerCase()
  if (!props.details) return ''
  return `${props.details.media_type || 'tv'}/${props.details.id}-${parseName}`
}
</script>
<style scoped lang="scss">
.app-card {
  @apply md:w-40 w-32;

  &__image {
    @apply md:h-56 h-48 rounded-lg relative overflow-hidden shadow;

    &__item {
      @apply absolute bg-cover bg-center bg-no-repeat w-full h-full hover:scale-110 hover:translate-x-1 hover:translate-y-1 transition-transform;
    }
  }
  &__footer {
    @apply px-2 pt-6 pb-3 text-left;

    h2 {
      @apply text-base font-bold text-gray-900 hover:text-blue-500;
    }
    p {
      @apply text-base font-mono text-gray-500 line-clamp-3;
    }
  }
}
</style>
