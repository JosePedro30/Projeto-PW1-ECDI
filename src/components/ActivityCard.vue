<template>
    <div class="flex flex-col text-4xl font-bold text-center text-white">
        <img
            :src="image"
            :alt="alt"
            loading="lazy"
            class="object-contain w-full aspect-[0.67]"
        />
        <h3 class="mt-7">{{ title }}</h3>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
  
export default defineComponent({
    name: 'ActivityCard',
    props: {
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    }
})
</script>