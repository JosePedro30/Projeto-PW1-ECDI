<template>
    <section class="day-section mb-20">
        <div class="flex flex-wrap gap-10 self-end max-w-full font-bold w-[1106px] max-md:mr-1.5">
            <h2 class="my-auto text-9xl text-center text-black rotate-[-5.421010862427522e-20rad] max-md:text-4xl">
                {{ date }}
            </h2>
        <div class="artist-grid mt-8 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            <article 
                v-for="artist in artists" 
                :key="artist.name"
                class="artist-card relative"
            >
            <div class="flex flex-col text-6xl font-bold text-white rotate-[-0.00031992011005575304rad] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:text-4xl">
                <img
                    :src="artist.image"
                    :alt="artist.name"
                    loading="lazy"
                    class="object-cover w-full aspect-[0.99]"
                />
                <div class="flex items-center justify-center w-full bg-slate-500 min-h-[125px] p-4">
                    <h3 class="text-center">{{ artist.name }}</h3>
                </div>
            </div>
            <button 
                @click="handleArtistSelect(artist)"
                class="absolute inset-0 w-full h-full opacity-0 focus:opacity-100 hover:opacity-100 bg-black/50 transition-opacity duration-300 flex items-center justify-center text-white"
                :aria-label="`View details for ${artist.name}`"
            >
            <span class="text-2xl">View Details</span>
            </button>
            </article>
        </div>
        </div>
    </section>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { Artist } from '@/components/types.ts'
  
export default defineComponent({
    name: 'DaySection',
    props: {
        date: {
            type: String,
            required: true
        },
        artists: {
            type: Array as PropType<Artist[]>,
            required: true
        }
    },
    emits: ['artist-selected'],
    methods: {
        handleArtistSelect(artist: Artist): void {
            this.$emit('artist-selected', artist)
        }
    }
})
</script>
  
<style scoped>
.artist-card {
    transform: translateZ(0);
    backface-visibility: hidden;
}
  
.artist-card:focus-within {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
}
  
@media (prefers-reduced-motion: no-preference) {
    .artist-card {
      transition: transform 0.3s ease;
    }
    
    .artist-card:hover {
      transform: scale(1.02);
    }
}
  
@media (prefers-reduced-motion: reduce) {
    .artist-card {
      transition: none;
    }
}
</style>