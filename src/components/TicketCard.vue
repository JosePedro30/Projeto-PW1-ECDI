<template>
    <div class="flex gap-5 justify-between items-start mt-24 max-w-full text-center text-black w-[843px] max-md:mt-10">
        <img
            :src="image"
            class="object-contain shrink-0 aspect-square w-[87px]"
            :alt="`Ticket icon for ${date}`"
            loading="lazy"
        />
        <div class="flex gap-1.5">
        <div class="grow text-5xl font-bold max-md:text-4xl">
            {{ date }}
        </div>
        <div class="my-auto text-base">{{ dayOfWeek }}</div>
        </div>
        <div class="flex gap-10 items-start self-stretch my-auto text-base">
        <div class="self-end mt-9 basis-auto">e muito mais</div>
        <div class="flex flex-col self-start font-bold">
            <button
                class="px-3.5 pt-3.5 pb-2 border-2 border-black border-solid hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black"
                @click="addToCart"
            >
            Adicionar ao carrinho
            </button>
        </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
  
interface Props {
    date: string
    dayOfWeek: string
    image: string
}
  
export default defineComponent({
    name: 'TicketCard',
    props: {
        date: {
            type: String,
            required: true
        },
        dayOfWeek: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    setup() {
        const addToCart = () => {
            // Implementation for adding to cart
        }
  
        return {
            addToCart
        }
    }
})
</script>