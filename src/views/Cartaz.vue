<template>
  <div class="flex overflow-hidden flex-col bg-white">
    <NavBar />
    <FestivalContent />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'
import FestivalContent from '@/components/FestivalContent.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'FestivalLayout',
  components: {
    NavBar,
    FestivalContent,
    Footer
  }
})
</script>