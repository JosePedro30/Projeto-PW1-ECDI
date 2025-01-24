<template>
    <section class="product-section">
        <h2 class="self-start mt-12 text-2xl font-bold text-black max-md:mt-10">{{ title }}</h2>
        <div class="self-center mt-12 w-full max-w-[1553px] max-md:mt-10 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col">
                <div v-for="product in products" :key="product.id" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col items-center w-full max-md:mt-10">
                 <div class="flex flex-col justify-center self-stretch p-px rounded-2xl border-2 border-solid bg-slate-500 border-slate-500">
                <img :src="product.image" :alt="product.name" loading="lazy" class="object-contain w-full aspect-[0.81]" />
                </div>
                <div class="mt-5 text-base font-bold text-slate-500">{{ product.name }}</div>
                <button class="flex gap-2.5 items-center p-2.5 mt-3 w-[57px]" :aria-label="`Add ${product.name} to cart`">
                    <img :src="product.cartIcon" alt="" class="object-contain self-stretch my-auto aspect-square rounded-[90px] w-[37px]" />
                </button>
            </div>
            </div>
        </div>
        </div>
    </section>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from './types'
  
export default defineComponent({
    name: 'ProductSection',
    props: {
        title: {
            type: String,
        required: true
        },
        products: {
            type: Array as PropType<Product[]>,
        required: true
        }
    }
})
</script>