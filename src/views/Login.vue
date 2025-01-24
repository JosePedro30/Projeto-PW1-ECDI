<template>
    <form @submit.prevent="handleSubmit" class="flex overflow-hidden flex-col items-end px-20 pt-11 pb-96 bg-gray-200 border-2 border-black border-solid max-md:px-5 max-md:pb-24">
        <div class="flex flex-wrap gap-5 justify-between w-full font-bold text-black max-w-[1618px] max-md:max-w-full">
            <h2 class="self-end mt-64 text-4xl max-md:mt-10">Já tenho conta</h2>
            <div class="flex flex-col max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/e23f6180354fc1b025a0decd1976eb03f3dacbb7267bf19abf150e6a660664fd?apiKey=7cf9ab7765004c278c4384db27161637&" alt="" class="object-contain self-end aspect-square w-[47px]" />
                <h1 class="self-start mt-6 text-6xl text-center max-md:max-w-full max-md:text-4xl">
                Autenticar / Registar
                </h1>
                <h2 class="self-center mt-32 text-4xl max-md:mt-10">Criar conta</h2>
            </div>
        </div>
  
        <div class="self-center mt-8 w-full max-w-[1341px] max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col">
                <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col w-full text-2xl text-center whitespace-nowrap text-neutral-400 max-md:mt-10 max-md:max-w-full">
                    <div class="relative">
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" id="email" v-model="formData.email" class="p-3.5 max-w-full bg-white rounded-md border-2 border-solid border-neutral-400 w-[533px] max-md:pr-5" placeholder="Email" />
                </div>
                <div class="flex flex-wrap gap-5 items-start mt-6 max-md:max-w-full">
                    <div class="relative grow">
                    <label for="password" class="sr-only">Palavra-Passe</label>
                    <input :type="showPassword ? 'text' : 'password'" id="password" v-model="formData.password" class="w-full p-3.5 bg-white rounded-md border-2 border-solid border-neutral-400 max-md:pr-5" placeholder="Palavra-Passe" />
                </div>
                    <button type="button" @click="togglePassword" class="focus:outline-none" aria-label="Toggle password visibility">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/f16f99782fe7c3915dc27a33ae76bb897a0ffd92b2f1aa84f29286b3a4f2f97c?apiKey=7cf9ab7765004c278c4384db27161637&" alt="" class="object-contain shrink-0 mt-1.5 aspect-square w-[53px]" />
                </button>
                </div>
            </div>
        </div>
        <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col text-2xl whitespace-nowrap text-neutral-400 max-md:mt-10 max-md:max-w-full">
                <div class="relative">
                    <label for="firstName" class="sr-only">Nome</label>
                    <input type="text" id="firstName" v-model="formData.firstName" class="px-3 py-3.5 w-full text-center bg-white rounded-md border-2 border-solid border-neutral-400 max-md:pr-5" placeholder="Nome" />
                </div>
                <div class="relative mt-6">
                    <label for="lastName" class="sr-only">Apelido</label>
                    <input type="text" id="lastName" v-model="formData.lastName" class="p-3.5 w-full bg-white rounded-md border-2 border-solid border-neutral-400 max-md:pr-5" placeholder="Apelido" />
                </div>
                </div>
            </div>
            </div>
        </div>
  
        <div class="flex flex-wrap gap-5 justify-between items-start self-center mt-4 w-full text-2xl text-center whitespace-nowrap max-w-[1335px] max-md:max-w-full">
            <button type="submit" class="px-16 py-3 mt-1.5 text-white bg-green-400 max-md:px-5">
            Autenticar
            </button>
            <div class="relative">
                <label for="loginEmail" class="sr-only">Email</label>
                <input type="email" id="loginEmail" v-model="formData.loginEmail" class="p-3.5 bg-white rounded-md border-2 border-solid border-neutral-400 text-neutral-400 max-md:pr-5" placeholder="Email" />
            </div>
        </div>
  
        <div class="relative mt-5 mr-72 max-w-full w-[533px] max-md:mr-2.5">
            <label for="loginPassword" class="sr-only">Palavra-passe</label>
            <input type="password" id="loginPassword" v-model="formData.loginPassword" class="p-3.5 w-full text-2xl whitespace-nowrap bg-white rounded-md border-2 border-solid border-neutral-400 text-neutral-400 max-md:pr-5" placeholder="Palavra-passe" />
        </div>
  
        <div class="flex flex-wrap gap-5 mt-6 mr-52 max-w-full text-2xl text-center text-neutral-400 w-[605px] max-md:mr-2.5">
            <div class="relative grow">
                <label for="confirmPassword" class="sr-only">Confirmar palavra-passe</label>
                <input type="password" id="confirmPassword" v-model="formData.confirmPassword" class="p-3.5 w-full bg-white rounded-md border-2 border-solid border-neutral-400 max-md:pr-5" placeholder="Confirmar palavra-passe" />
            </div>
            <button type="button" @click="toggleConfirmPassword" class="focus:outline-none" aria-label="Toggle confirm password visibility">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/f16f99782fe7c3915dc27a33ae76bb897a0ffd92b2f1aa84f29286b3a4f2f97c?apiKey=7cf9ab7765004c278c4384db27161637&" alt="" class="object-contain shrink-0 aspect-square w-[53px]" />
            </button>
        </div>
  
        <h2 class="self-center mt-16 ml-44 text-4xl font-bold text-black max-md:mt-10">
            A sua morada
        </h2>
  
        <div class="relative mt-8 mr-72 max-w-full w-[533px] max-md:mr-2.5">
            <label for="street" class="sr-only">Rua</label>
            <input type="text" id="street" v-model="formData.street" class="px-3 py-3.5 w-full text-2xl text-center whitespace-nowrap bg-white rounded-md border-2 border-solid border-neutral-400 text-neutral-400 max-md:pr-5" placeholder="Rua" />
        </div>
  
        <div class="flex flex-wrap gap-6 mt-6 mr-72 max-w-full text-2xl text-neutral-400 w-[531px] max-md:mr-2.5">
            <div class="relative grow">
                <label for="postalCode" class="sr-only">Código Postal</label>
                <input type="text" id="postalCode" v-model="formData.postalCode" class="px-3 py-3.5 w-full bg-white rounded-md border-2 border-solid border-neutral-400 max-md:pr-5" placeholder="Código Postal" />
            </div>
            <div class="relative grow">
                <label for="city" class="sr-only">Cidade</label>
                <input type="text" id="city" v-model="formData.city" class="px-2 py-3.5 w-full whitespace-nowrap bg-white rounded-md border-2 border-solid border-neutral-400 max-md:pr-5" placeholder="Cidade" />
            </div>
        </div>
  
        <div class="relative mt-6 mr-72 max-w-full w-[533px] max-md:mr-2.5">
            <label for="contactEmail" class="sr-only">Email</label>
            <input type="email" id="contactEmail" v-model="formData.contactEmail" class="px-3 py-3.5 w-full text-2xl text-center whitespace-nowrap bg-white rounded-md border-2 border-solid border-neutral-400 text-neutral-400 max-md:pr-5" placeholder="Email" />
        </div>
  
        <button type="submit" class="self-center px-16 py-3 mt-8 ml-64 max-w-full text-2xl text-center text-white whitespace-nowrap bg-green-400 w-[298px] max-md:px-5">
            Registar
        </button>
    </form>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue'
  
interface FormData {
    email: string
    password: string
    firstName: string
    lastName: string
    loginEmail: string
    loginPassword: string
    confirmPassword: string
    street: string
    postalCode: string
    city: string
    contactEmail: string
}
  
export default defineComponent({
    name: 'AuthenticationForm',
    setup() {
        const showPassword = ref(false)
        const showConfirmPassword = ref(false)
        const formData = ref<FormData>({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            loginEmail: '',
            loginPassword: '',
            confirmPassword: '',
            street: '',
            postalCode: '',
            city: '',
            contactEmail: ''
        })
  
        const togglePassword = () => {
            showPassword.value = !showPassword.value
        }
  
        const toggleConfirmPassword = () => {
            showConfirmPassword.value = !showConfirmPassword.value
        }
  
        const handleSubmit = (event: Event) => {
            event.preventDefault()
            // Handle form submission
        }
  
        return {
            formData,
            showPassword,
            showConfirmPassword,
            togglePassword,
            toggleConfirmPassword,
            handleSubmit
        }
    }
})
</script>