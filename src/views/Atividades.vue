<template>
    <div class="flex overflow-hidden flex-col bg-white">
        <main>
        <section 
            class="flex relative flex-col justify-center py-1.5 -mt-1 w-full min-h-[1088px] max-md:max-w-full"
            aria-labelledby="volunteer-section"
        >
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/6134cc00046ff38157bfbd8bf88e4ffd69f21671b4e3135c7c76642423ef4d60?apiKey=7cf9ab7765004c278c4384db27161637&"
            class="object-cover absolute inset-0 size-full"
            alt="Background image for volunteer section"
        />
        <div
            class="flex relative flex-col items-center px-20 pt-20 pb-44 w-full bg-black bg-opacity-80 max-md:px-5 max-md:pb-24 max-md:max-w-full"
        >
        <div
            class="flex flex-col -mb-9 w-full max-w-[1452px] max-md:mb-2.5 max-md:max-w-full"
        >
        <h1
            id="volunteer-section"
            class="self-center text-6xl font-bold text-center text-white max-md:text-4xl"
        >
        Voluntariado
        </h1>
        <div
            class="mt-28 mr-6 ml-4 text-3xl text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full"
        > 
        <h2 class="text-4xl font-bold">Junte-se à nossa equipa de voluntários!</h2>
            <p class="mt-8">O ECOSound Festival é mais do que música; é um movimento pela
                sustentabilidade e pela união. Procuramos pessoas apaixonadas por
                ajudar a criar uma experiência inesquecível enquanto cuidamos do
                planeta.</p>
            <p class="mt-4">Ao se voluntariar, terá a oportunidade de fazer parte da
                nossa equipa, contribuir para a organização do evento e viver de
                perto a magia do festival.</p>
            <p class="mt-4">Oferecemos formação, momentos de convívio e, claro, muita 
                diversão! Como agradecimento, os voluntários terão acesso exclusivo 
                a áreas do festival, brindes sustentáveis e a chance de fazer a 
                diferença.</p>
            <p class="mt-4">Inscreva-se agora e ajude-nos a construir um evento 
                responsável e inspirador!</p>
            </div>
  
            <form class="mt-8" @submit.prevent="handleVolunteerSubmit">
                <div class="flex flex-col gap-4 max-w-[687px]">
                    <div class="relative">
                    <label for="volunteerType" class="sr-only">Tipo de voluntariado</label>
                    <select
                        id="volunteerType"
                        name="volunteerType"
                        class="w-full px-3.5 py-3 text-2xl text-white bg-neutral-600 border border-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                        required
                    >
                        <option value="">Tipo de voluntariado</option>
                        <option value="logistica">Logística</option>
                        <option value="ambiente">Ambiente</option>
                        <option value="apoio">Apoio ao Público</option>
                    </select>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/7added0ec75582beb4d29a65cff8adfd8eb99f0b7e8ae90a6e5897972965fdee?apiKey=7cf9ab7765004c278c4384db27161637&"
                        class="absolute right-3.5 top-1/2 transform -translate-y-1/2 w-[17px] pointer-events-none"
                        alt=""
                    />
                </div>
                  
                <button
                    type="submit"
                    class="px-16 py-3 text-2xl text-center text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
                >
                    Inscrever
                </button>
                </div>
            </form>
            </div>
        </div>
        </section>
  
        <section 
            class="flex flex-col items-center px-20 pt-20 pb-60 w-full bg-slate-500 max-md:px-5 max-md:pb-24 max-md:max-w-full"
            aria-labelledby="activities-section"
        >
        <div class="flex flex-col -mb-12 w-full max-w-[1415px] max-md:mb-2.5 max-md:max-w-full">
            <h2
                id="activities-section"
                class="self-center text-6xl font-bold text-center text-white max-md:text-4xl"
            >
            Atividades
            </h2>
            
            <div class="grid grid-cols-4 gap-5 mt-24 max-md:grid-cols-1 max-md:mt-10">
                <ActivityCard
                    image="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/1eed53140d353d333891bea3291d30db0676e4a55bcdf9553d00651c6bdfda40?apiKey=7cf9ab7765004c278c4384db27161637&"
                    title="Oficina de pintura"
                    alt="Pessoas participando da oficina de pintura"
                />
                <ActivityCard
                    image="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/d091ad29a4e410919d541c221ba6c58799d8e279bf2db9fefcf45d32955c0cce?apiKey=7cf9ab7765004c278c4384db27161637&"
                    title="Observações de estrelas"
                    alt="Telescópio apontado para o céu noturno"
                />
                <ActivityCard
                    image="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/2aa75c33e4b4f0f465ec1fa275fd28c5b596807a286bb17aeac200a2b714986d?apiKey=7cf9ab7765004c278c4384db27161637&"
                    title="Caminhadas ecológicas"
                    alt="Grupo fazendo trilha na natureza"
                />
                <ActivityCard
                    image="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/054754c382da4ef863c81536796367821cc52bce47a0b5de6648c1049bba03c5?apiKey=7cf9ab7765004c278c4384db27161637&"
                    title="Tenda de bem-estar"
                    alt="Espaço de relaxamento e meditação"
                />
            </div>
        </div>
        </section>
        </main>
  
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import ActivityCard from '../components/ActivityCard.vue'
import SocialLink from '@/components/SocialLink.vue'
  
export default defineComponent({
    name: 'ActivitiesPage',
    components: {
        ActivityCard,
        SocialLink
    },
    methods: {
        handleVolunteerSubmit(event: Event) {
        // Handle form submission
        }
    }
})
</script>