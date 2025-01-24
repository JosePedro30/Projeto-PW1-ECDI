<template>
    <div class="flex z-10 flex-col mb-0 w-full max-w-[1420px] max-md:mb-2.5 max-md:max-w-full">
        <div v-for="(day, index) in festivalDays" :key="index">
            <DaySection 
                :date="day.date"
                :artists="day.artists"
            />
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import DaySection from '@/components/DaySection.vue'
import type { FestivalDay } from '@/components/types.ts'
  
export default defineComponent({
    name: 'ArtistGrid',
    components: {
        DaySection
    },
    data() {
        return {
            festivalDays: [
                {
                    date: '17 Janeiro',
                    artists: [
                        { name: 'Xutos & Pontapés', image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/d932c16888ba0de283c1b3d8e745433aea389b09dbcccc7696f7caee2e13a9dd?apiKey=7cf9ab7765004c278c4384db27161637&' },
                        { name: 'Tiago Bettencourt', image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/184fe5b9f88ca9ac9f2ca122b4756a4225baf193795175fc90ac7a1e4aed1002?apiKey=7cf9ab7765004c278c4384db27161637&' },
                        { name: 'Fernando Daniel', image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/c583c009df3ae9307494f85576b5ef1d08136658826e2aba3bb0563899a317c0?apiKey=7cf9ab7765004c278c4384db27161637&' },
                        { name: 'Coldplay', image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/b8f004298377c42380164d32d6f51db42219a1e082a93bbe955ff0c53ff4ca3c?apiKey=7cf9ab7765004c278c4384db27161637&' }
                    ]
                },
                // Additional days data structure follows same pattern
            ] as FestivalDay[]
        }
    }
})
</script>