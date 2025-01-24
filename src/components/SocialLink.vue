<template>
    <a 
        :href="href"
        :aria-label="label"
        class="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black transition-opacity"
    >
    <img
        :src="icon"
        :alt="label"
        loading="lazy"
        class="w-10 aspect-square object-contain"
    />
    </a>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
  
export default defineComponent({
    name: 'SocialLink',
    props: {
        href: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    }
})
</script>