<template>
    <div class="flex overflow-hidden flex-col bg-white">
        <NavBar />
        <CausaVerdeSustentabilidade />
        <Footer />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '../components/NavBar.vue'
import CausaVerdeSustentabilidade from '@/components/CausaVerdeSustentabilidade.vue'
import Footer from '../components/Footer.vue'
  
export default defineComponent({
    name: 'EcoSoundPage',
    components: {
        NavBar,
        CausaVerdeSustentabilidade,
        Footer
    }
})
</script>