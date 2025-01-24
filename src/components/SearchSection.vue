<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SearchSection'
});
</script>

<template>
    <section class="flex overflow-hidden relative flex-col h-[760px] max-md:max-w-full" aria-label="Search Section">
        <div class="flex z-0 flex-col self-end px-7 w-full max-md:pl-5 max-md:max-w-full">
            <div class="flex flex-col items-center px-20 pt-20 pb-44 bg-orange-50 max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <div class="flex flex-col items-start mb-0 ml-12 max-w-full w-[1261px] max-md:mb-2.5">
                <div class="flex flex-wrap gap-5 justify-between self-end max-w-full w-[880px]">
                    <div class="flex shrink-0 max-w-full bg-neutral-200 h-[95px] w-[345px]"></div>
                    <div class="flex shrink-0 max-w-full bg-neutral-200 h-[95px] w-[346px]"></div>
                </div>
                </div>
            </div>
        </div>
        <h1 class="absolute z-0 text-6xl font-bold text-right text-black h-[70px] left-[647px] top-[97px] w-[565px] max-md:max-w-full max-md:text-4xl">
        O que procuras?
        </h1>
    </section>
</template>