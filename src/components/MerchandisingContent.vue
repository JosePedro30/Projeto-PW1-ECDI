<template>
    <main class="flex flex-col px-20 pt-20 pb-40 w-full bg-orange-50 max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <section class="self-end w-full max-w-[1684px] max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col">
                <div class="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                    <p class="self-stretch my-auto mr-0 text-2xl text-black max-md:mt-10 max-md:max-w-full">
                        Aqui pode encontrar produtos 100% eco-friendly, fabricados com materiais sustentáveis e de alta qualidade. Comprometemo-nos com a proteção do ambiente, garantindo que cada peça de vestuário e acessório seja produzida de forma responsável e consciente.<br /><br />
                        Ao escolher os nossos produtos, vai investir no estilo e no futuro do planeta e<span class="text-green-400"> 10% do lucro gerado</span> é revertido para causas que protegem o meio ambiente.<br /><br />
                    </p>
                </div>
                <div class="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/e67ddb5f-9f64-450c-8ce8-fcdce2e7338e?apiKey=7cf9ab7765004c278c4384db27161637&" alt="Eco-friendly merchandise collection" class="object-contain grow w-full aspect-[2.09] max-md:max-w-full" />
                </div>
            </div>
        </section>
        <ProductSection title="T-SHIRTS" :products="tshirts" />
        <ProductSection title="SWEATSHIRTS" :products="sweatshirts" />
        <ProductSection title="ACESSÓRIOS" :products="accessories" />
    </main>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import ProductSection from './ProductSection.vue'
import { Product } from './types'
  
export default defineComponent({
    name: 'MerchandisingContent',
    components: {
        ProductSection
    },
    setup() {
        const tshirts: Product[] = [
            { id: 1, image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/8b840b64ef3fab756ab9d9472be0959f4b09de0e3f0062ffb674da20f5a28359?apiKey=7cf9ab7765004c278c4384db27161637&', name: 'T-shirt branca', cartIcon: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&' },
            { id: 2, image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/d0bb4eb9ff6d16ce107264b66e548cb25596a670ff13ed1396e0076b170c85c1?apiKey=7cf9ab7765004c278c4384db27161637&', name: 'T-shirt rosa', cartIcon: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&' },
            { id: 3, image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/58cd164aeb0796b767d0e487e19dcfb7f7962b308aeaab24264ee38dcf8b0969?apiKey=7cf9ab7765004c278c4384db27161637&', name: 'T-shirt cinza', cartIcon: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&' },
            { id: 4, image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/512fb8ee808e3a09f89c051e0d631abc306aba966246cc44800bcf0e43427bf9?apiKey=7cf9ab7765004c278c4384db27161637&', name: 'T-shirt bege', cartIcon: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&' }
        ]
  
        const sweatshirts: Product[] = [
            { id: 5, image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/9eb2fbfe6820ead76ae66951ae417d0d56311aa8f8b4733010aab98915ce5616?apiKey=7cf9ab7765004c278c4384db27161637&', name: 'Sweatshirt branca', cartIcon: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&' },
            { id: 6, image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/242f6685e633394f2e31e273135392e50ca4182a79c3e76d9ca2408ad3fb1efa?apiKey=7cf9ab7765004c278c4384db27161637&', name: 'Sweatshirt azul', cartIcon: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&' },
            { id: 7, image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/3141a477b2c77fc8e3cbe0cf29aaaccf600b60c15eefa0eaa9070920d86aeaac?apiKey=7cf9ab7765004c278c4384db27161637&', name: 'Sweatshirt bege', cartIcon: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&' },
            { id: 8, image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/8d6cd1ea84080bc06d6759f7ee12df9b60dbab3ed0e793d6a38938c466e4f2e6?apiKey=7cf9ab7765004c278c4384db27161637&', name: 'Sweatshirt cinza', cartIcon: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&' }
        ]
  
        const accessories: Product[] = [
            { id: 9, image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/c93e1d21acbfd291c346009e30b5f251e4dd8ed2016239f17049d39569f4b79e?apiKey=7cf9ab7765004c278c4384db27161637&', name: 'Capa iphone c/ lineup', cartIcon: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&' },
            { id: 10, image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/714e77f0c737ac70a68e55ce0cef93eb40fd072d4dbe8b187e2c8490a66d6df5?apiKey=7cf9ab7765004c278c4384db27161637&', name: 'Saco EcoSound', cartIcon: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&' },
            { id: 11, image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/4c70820d75c0570a0471771ceb4c2703dcf732793411af7b3aa4a34df36bd31b?apiKey=7cf9ab7765004c278c4384db27161637&', name: 'Chapéu EcoSound', cartIcon: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&' },
            { id: 12, image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/5e6cf9f6b89645d808adfc6cc7ff5060d06076db733904111916d189efd773b1?apiKey=7cf9ab7765004c278c4384db27161637&', name: 'Tapete de rato EcoSound', cartIcon: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&' }
        ]
  
        return {
            tshirts,
            sweatshirts,
            accessories
        }
    }
})
</script>