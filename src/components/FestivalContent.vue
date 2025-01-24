<template>
    <main class="flex flex-col pt-20 bg-orange-50 max-md:max-w-full">
      <div class="flex z-10 flex-col items-center px-20 pb-96 mb-0 bg-orange-50 max-md:px-5 max-md:pb-24 max-md:mb-2.5 max-md:max-w-full">
        <ArtistGrid />
      </div>
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import ArtistGrid from '@/components/ArtistGrid.vue'
  
  export default defineComponent({
    name: 'FestivalContent',
    components: {
      ArtistGrid
    }
  })
  </script>