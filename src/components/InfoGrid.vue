<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InfoGrid'
});
</script>

<template>
    <section class="flex flex-col items-start mb-0 ml-12 max-w-full w-[1261px] max-md:mb-2.5" aria-label="Information Grid">
        <div class="flex flex-wrap gap-5 justify-between items-start mt-24 max-w-full text-4xl font-bold text-center text-black w-[1092px] max-md:mt-10">
            <button class="px-16 py-3.5 whitespace-nowrap bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-black max-md:px-5">Localização</button>
            <button class="px-16 py-3.5 whitespace-nowrap bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-black max-md:px-5">Bungalows</button>
            <button class="px-16 py-3.5 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-black max-md:px-5">Objetos Proibidos</button>
        </div>
        <div class="flex flex-wrap gap-5 justify-between mt-7 max-w-full text-4xl font-bold text-center text-black w-[1092px]">
            <button class="px-16 pt-2.5 pb-4 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-black max-md:px-5">Como Chegar</button>
            <button class="px-16 pt-2 pb-6 whitespace-nowrap bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-black max-md:px-5">Horários</button>
            <button class="px-7 pt-2.5 pb-5 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-black max-md:px-5">Alimentação e bebidas</button>
        </div>
        <div class="flex flex-wrap gap-5 justify-between mt-8 max-w-full text-4xl font-bold text-center text-black w-[1092px]">
            <button class="px-14 pt-2.5 pb-4 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-black max-md:px-5">Segurança e Saúde</button>
            <button class="px-16 pt-2.5 pb-6 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-black max-md:px-5">Items essenciais</button>
            <button class="px-8 pt-2.5 pb-4 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-black max-md:px-5">Regras e Regulamentos</button>
        </div>
        <div class="flex flex-wrap gap-10 self-center mt-8 max-w-full text-4xl font-bold text-center text-black whitespace-nowrap w-[713px]">
            <button class="grow px-16 py-3.5 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-black w-fit max-md:px-5">Faqs</button>
            <button class="grow px-16 pt-2.5 pb-6 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-black w-fit max-md:px-5">Parceiros</button>
        </div>
    </section>
</template>