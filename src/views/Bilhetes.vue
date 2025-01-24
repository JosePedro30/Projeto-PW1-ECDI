<template>
    <div class="flex overflow-hidden flex-col bg-white">
        <section
            class="z-10 pr-20 w-full bg-orange-50 max-md:pr-5 max-md:max-w-full"
            aria-labelledby="daily-tickets"
        >
        <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/d407101a90ceae5c785ba74bd50e35eca18e37f2f86bd11d501525118b27f6ef?apiKey=7cf9ab7765004c278c4384db27161637&"
                    class="object-contain grow w-full aspect-[0.71] max-md:mt-10 max-md:max-w-full"
                    alt="Daily ticket promotional image"
                />
            </div>
            <div class="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
                    <h1
                        id="daily-tickets"
                        class="self-center text-7xl font-bold text-center text-black max-md:text-4xl"
                    >
                    Bilhete Diário
                    </h1>
  
                    <TicketCard
                    v-for="ticket in dailyTickets"
                    :key="ticket.date"
                    :date="ticket.date"
                    :dayOfWeek="ticket.dayOfWeek"
                    :image="ticket.image"
                />
  
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/f710a8489f72fafaa1dde9e948aced89cb262fe72df9bf96891bbc986649790a?apiKey=7cf9ab7765004c278c4384db27161637&"
                    class="object-contain self-end mt-20 max-w-full aspect-[0.98] w-[330px] max-md:mt-10"
                  alt="Daily ticket promotional footer"
                />
                </div>
            </div>
        </div>
        </section>
  
        <TwoDayPassSection />
        <GeneralPassSection />
        <SiteFooter />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '../components/NavBar.vue'
import TicketCard from '../components/TicketCard.vue'
import TwoDayPassSection from '../components/TwoDayPassSection.vue'
import GeneralPassSection from '../components/GeneralPassSection.vue'
import Footer from '../components/Footer.vue'
  
export default defineComponent({
    name: 'TicketsPage',
    components: {
        NavBar,
        TicketCard,
        TwoDayPassSection,
        GeneralPassSection,
        Footer
    },
    setup() {
        const dailyTickets = [
            {
                date: '17 de Janeiro',
                dayOfWeek: 'Sexta-Feira',
                image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/7cba41fd94550732cf5c33167c6f7c8b3ba0a4b34227effbf5a1540a45164066?apiKey=7cf9ab7765004c278c4384db27161637&'
            },
            {
                date: '18 de Janeiro',
                dayOfWeek: 'Sexta-Feira',
                image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/7cba41fd94550732cf5c33167c6f7c8b3ba0a4b34227effbf5a1540a45164066?apiKey=7cf9ab7765004c278c4384db27161637&'
            },
            {
                date: '19 de Janeiro',
                dayOfWeek: 'Sexta-Feira',
                image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/7cba41fd94550732cf5c33167c6f7c8b3ba0a4b34227effbf5a1540a45164066?apiKey=7cf9ab7765004c278c4384db27161637&'
            }
        ] 
  
        return {
            dailyTickets
        }
    }
})
</script>