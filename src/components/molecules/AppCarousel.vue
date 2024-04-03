<template>
  <div class="app-carousel">
    <div class="app-carousel__header">
      <div class="md:flex flex-none items-center">
        <h2>{{ title }}</h2>
        <div class="md:pt-0 pt-3">
          <slot name="header"></slot>
        </div>
      </div>

      <div class="app-carousel__header__buttons">
        <button @click="back()" icon="arrowLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button @click="next()" icon="arrowRight">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>

    <swiper
      :modules="modules"
      :breakpoints="breakpoints"
      :spaceBetween="16"
      @swiper="onSwiper"
      :loop="true"
    >
      <slot />
    </swiper>
  </div>
</template>

<script setup>
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ref, reactive, nextTick } from 'vue'

const modules = [Navigation, Pagination]

const carousel = ref()

defineProps({
  title: {
    type: String,
    default: ''
  }
})

const onSwiper = (swiper) => {
  carousel.value = swiper
}

const breakpoints = reactive({
  320: {
    slidesPerView: 2.5,
    spaceBetween: 12
  },
  640: {
    slidesPerView: 4.5,
    spaceBetween: 10
  },
  1024: {
    slidesPerView: 5.5,
    spaceBetween: 12
  },
  1440: {
    slidesPerView: 6.5,
    spaceBetween: 12
  },

  1680: {
    slidesPerView: 7.5,
    spaceBetween: 20
  }
})

const next = () => {
  nextTick(() => {
    carousel.value.slideNext()
  })
}

const back = () => {
  carousel.value.slidePrev()
}
</script>

<style lang="scss" scoped>
.app-carousel {
  @apply py-8;

  &__header {
    @apply flex items-start justify-between pb-6;

    h2 {
      @apply pr-6 text-3xl font-medium text-gray-500;
    }

    &__buttons {
      @apply flex space-x-3;

      button {
        @apply bg-gray-200 rounded-full p-2 hover:bg-blue-500 hover:text-white;
      }
    }
  }
}
</style>
