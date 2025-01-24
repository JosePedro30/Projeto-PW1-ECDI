<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../components/NavBar.vue';
import SearchSection from '@/components/SearchSection.vue';
import InfoGrid from '@/components/InfoGrid.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
    name: 'InfoPage',
    components: {
        NavBar,
        SearchSection,
        InfoGrid,
        Footer
    }
});
</script>

<template>
    <div class="flex flex-col px-6 max-md:pl-5">
        <div class="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
        <Header />
        <div class="flex flex-col pt-9 pb-1.5 mt-0 bg-orange-50 max-md:max-w-full">
            <SearchSection />
            <InfoGrid />
            <Footer />
        </div>
        </div>
    </div>
</template>