<template>
    <div class="flex overflow-hidden flex-col bg-white">
        <NavBar />
        <MerchandisingContent />
        <Footer />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '../components/NavBar.vue';
import MerchandisingContent from '../components/MerchandisingContent.vue'
import Footer from '../components/Footer.vue';

  
export default defineComponent({
    name: 'MerchandisingLayout',
    components: {
        NavBar,
        MerchandisingContent,
        Footer
    }
})
</script>