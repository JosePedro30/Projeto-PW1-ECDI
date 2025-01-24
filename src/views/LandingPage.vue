<template>
    <div class="flex overflow-hidden flex-col bg-white">
      <header class="flex z-10 gap-5 justify-between items-center px-9 py-6 w-full bg-slate-500 max-md:px-5 max-md:max-w-full">
        <div class="flex flex-col justify-center self-stretch p-2.5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/700a0dbe14fdf03587da6d363014556623a5a9c4559d50208b2af8dbbc2d2c08?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637" alt="Festival Logo" class="object-contain aspect-[4.37] w-[253px]" />
        </div>
        <nav class="flex flex-wrap gap-10 self-stretch my-auto text-4xl font-bold text-center text-white max-md:max-w-full" role="navigation">
          <a href="#cartaz" class="gap-2.5 self-stretch p-2.5 whitespace-nowrap hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400" tabindex="0">Cartaz</a>
          <a href="#bilhetes" class="gap-2.5 self-stretch p-2.5 whitespace-nowrap hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400" tabindex="0">Bilhetes</a>
          <a href="#atividades" class="gap-2.5 self-stretch p-2.5 whitespace-nowrap hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400" tabindex="0">Atividades</a>
          <a href="#merchandising" class="gap-2.5 self-stretch p-2.5 whitespace-nowrap hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400" tabindex="0">Merchandising</a>
          <a href="#info" class="gap-2.5 self-stretch p-2.5 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400" tabindex="0">Info Útil</a>
          <a href="#causa-verde" class="gap-2.5 self-stretch p-2.5 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400" tabindex="0">Causa Verde</a>
        </nav>
        <div class="flex gap-5 self-stretch my-auto">
          <button class="flex gap-2.5 items-center p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400" aria-label="Search">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b938be08d6a2c8966ad0eb6b50a8d2adef44ed958cf104d1e40df1fa552c4ef6?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637" alt="" class="object-contain self-stretch my-auto aspect-square w-[38px]" />
          </button>
          <button class="flex gap-2.5 items-center p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400" aria-label="User account">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/713fd5f8d7c6fb79ea8b0da616ab879d0c699836c2f027d659bf262ba56c32b7?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637" alt="" class="object-contain self-stretch my-auto aspect-square w-[38px]" />
          </button>
        </div>
      </header>
  
      <main>
        <section class="flex flex-col pt-3.5 pb-9 -mt-11 w-full text-xl text-center text-white bg-black max-md:max-w-full" aria-label="Hero section">
          <div class="flex relative flex-col items-center px-16 pb-32 w-full min-h-[1021px] pt-[893px] max-md:px-5 max-md:py-24 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/902f90548bb2a757d8f94a1017c7375a0081ea002660f284e418db67c1b79744?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637" alt="Festival main stage" class="object-cover absolute inset-0 size-full" />
            <button class="relative gap-2.5 self-stretch px-5 py-4 mb-0 max-w-full bg-green-400 bg-opacity-60 min-h-[54px] w-[283px] max-md:mb-2.5 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-400" aria-label="Buy tickets">
              Compre o Seu Bilhete
            </button>
          </div>
        </section>
  
        <section class="px-16 pt-1 pb-14 w-full font-bold text-center text-white whitespace-nowrap bg-slate-500 text-[160px] max-md:px-5 max-md:max-w-full max-md:text-4xl" aria-label="Countdown timer">
          00:00:00
        </section>
  
        <section class="flex flex-col items-center px-20 pt-24 pb-44 w-full bg-orange-50 max-md:px-5 max-md:pb-24 max-md:max-w-full" aria-label="Line-up section">
          <div class="flex flex-col items-center mb-0 w-full max-w-[1416px] max-md:mb-2.5 max-md:max-w-full">
            <h2 class="text-6xl font-bold text-center text-black max-md:text-4xl">Line-up</h2>
            <div class="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col">
                <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow text-black max-md:mt-10">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9f796517669bdb9ba6d81e44dbbe55e6646727956994690c49f73400c56008e?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637" alt="Xutos & Pontapés performing live" class="object-contain w-full aspect-[1.1]" />
                    <div class="flex flex-col self-start mt-9 ml-4 max-md:ml-2.5">
                      <h3 class="text-4xl font-bold">Xutos & Pontapés</h3>
                      <time datetime="2025-01-19" class="self-start mt-6 text-xl">19 de Janeiro</time>
                    </div>
                  </div>
                </article>
  
                <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow text-black max-md:mt-10">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd2a92986bb0929d47f4d00b98aa22abff0c4b2aa3e3de51844eee50c3595b3?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637" alt="The Weeknd performing live" class="object-contain w-full aspect-[1.1]" />
                    <div class="flex flex-col self-start mt-9 ml-4 max-md:ml-2.5">
                      <h3 class="text-4xl font-bold">The Weeknd</h3>
                      <time datetime="2025-01-18" class="self-start mt-8 text-xl">18 de Janeiro</time>
                    </div>
                  </div>
                </article>
  
                <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow text-black max-md:mt-10">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e62ecc3b7ed53f645ff37a19471ce48881c17c6072745bee3b73cdc36c44e8f?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637" alt="Anselmo Ralph performing live" class="object-contain w-full aspect-[1.1]" />
                    <div class="flex flex-col self-start mt-9 ml-4 max-md:ml-2.5">
                      <h3 class="text-4xl font-bold">Anselmo Ralph</h3>
                      <time datetime="2025-01-17" class="self-start mt-6 text-xl">17 de Janeiro</time>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <button class="gap-2.5 self-stretch px-20 py-3.5 mt-36 ml-4 max-w-full text-xl text-center text-white bg-green-400 min-h-[50px] w-[262px] max-md:px-5 max-md:mt-10 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400">
              Ver Mais
            </button>
          </div>
        </section>
  
        <section class="flex flex-col w-full font-bold text-white bg-black max-md:max-w-full" aria-label="Green initiative section">
          <div class="flex relative flex-col justify-center items-center px-20 py-28 w-full min-h-[1080px] max-md:px-5 max-md:py-24 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/77d5fe4b3ac7eccb5b080360ceb2d36e90fdef8d0047a4af8979ad1996638b34?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637" alt="Nature background representing sustainability" class="object-cover absolute inset-0 size-full" />
            <div class="flex relative flex-col items-center mb-0 w-full max-w-[1394px] max-md:mb-2.5 max-md:max-w-full">
              <h2 class="ml-3 text-6xl text-center max-md:text-4xl">Causa Verde</h2>
              <p class="mt-40 ml-3 text-4xl text-center max-md:mt-10 max-md:max-w-full">
                Onde a música encontra a sustentabilidade e o respeito pela natureza!
              </p>
              <div class="self-stretch mt-36 text-3xl leading-8 text-stone-50 max-md:mt-10 max-md:max-w-full">
                O nosso festival vai além da música, celebrando também a harmonia com o meio ambiente, somos comprometidos com a sustentabilidade, adotamos práticas ecológicas para reduzir o impacto ambiental. Desde o uso de materiais biodegradáveis em copos e utensílios até sistemas de reciclagem eficientes, cada detalhe é pensado para proteger o planeta.
                <br /><br />
                Este guia nasce do nosso propósito de sensibilizar e incentivar comportamentos mais sustentáveis durante o festival. Queremos que tires o maior proveito desta experiência, mas também envolver-te na construção de um mundo mais ecológico e humano.
              </div>
              <button class="gap-2.5 self-stretch px-20 py-3.5 mt-32 ml-7 max-w-full text-xl text-center bg-green-400 min-h-[50px] w-[262px] max-md:px-5 max-md:mt-10 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400">
                Saber Mais
              </button>
            </div>
          </div>
        </section>
  
        <section class="flex flex-col items-center px-20 pt-24 pb-44 w-full bg-orange-50 max-md:px-5 max-md:pb-24 max-md:max-w-full" aria-label="News section">
          <div class="flex flex-col -mb-9 w-full max-w-[1415px] max-md:mb-2.5 max-md:max-w-full">
            <h2 class="self-center text-6xl font-bold text-center text-black max-md:text-4xl">Notícias</h2>
            <div class="mt-32 max-md:mt-10 max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col">
                <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow text-black max-md:mt-4">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/30b5da84ef0ff4a39b9f0d7edb769dbc8cecead72333f5ff6d2901f004f71925?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637" alt="Coldplay band members" class="object-contain w-full aspect-[0.99]" />
                    <div class="flex flex-col items-start pr-5 pl-1.5 mt-7">
                      <h3 class="text-4xl font-bold">Coldplay regressam a Portugal em 2025</h3>
                      <time datetime="2024-08-12" class="mt-4 text-sm">12 Agosto, 2024</time>
                      <p class="self-stretch mt-8 text-base">
                        A banda britânica que escusa apresentações está de volta a Portugal desta vez no festival EcoSound. A digressão segue depois por Espanha, Itália, Suíça, Dinamarca, entre outros.
                      </p>
                    </div>
                  </div>
                </article>
  
                <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col text-black max-md:mt-4">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a1f33f5d3e2ea28e6fa3d807a0732566601769ed7bb6db75b3c27aec4311c89?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637" alt="Sustainability award ceremony" class="object-contain w-full aspect-[0.99]" />
                    <div class="flex flex-col pr-6 pl-1.5 mt-7 max-md:pr-5">
                      <h3 class="text-4xl font-bold">ECOSound recebe prémio de sustentabilidade</h3>
                      <time datetime="2024-05-08" class="self-start mt-6 text-sm">8 de Maio, 2024</time>
                      <p class="mt-8 text-base max-md:mr-1">
                        O festival foi distinguido com o Greener Festival Award, que distingue eventos exemplares para a indústria através das práticas de sustentabilidade.
                      </p>
                    </div>
                  </div>
                </article>
  
                <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow text-black max-md:mt-3.5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a97f32dd124e8d725d95bc7b66facafb65e7d1c0b4fd80c2249b051717b5373?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637" alt="Festival crowd" class="object-contain w-full aspect-[0.99]" />
                    <div class="flex flex-col pr-3.5 pl-1.5 mt-7">
                      <h3 class="text-4xl font-bold max-md:mr-2.5">ECOSound já conta com 22 mil bilhetes vendidos</h3>
                      <time datetime="2024-08-12" class="self-start mt-6 text-sm">12 Agosto, 2024</time>
                      <p class="mt-8 text-base">
                        O ECOSound, que se realiza em Idanha-a-Nova, de 18 a 29 de Janeiro, já vendeu 22 mil bilhetes para 38 diferentes nacionalidades. Apenas com mais 3 mil disponíveis para venda.
                      </p>
                    </div>
                  </div>
                </article>
  
                <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col text-black max-md:mt-3.5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b42a4d9c728f912739f2868bfcc64047d29d188813bbc5a7b2807b8b2669d84?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637" alt="Eco-friendly festival practices" class="object-contain w-full aspect-[0.99]" />
                    <div class="flex flex-col pr-5 pl-1.5 mt-7">
                      <h3 class="text-4xl font-bold">Festival mais sustentável de Portugal</h3>
                      <time datetime="2024-09-27" class="self-start mt-5 text-sm">27 setembro, 2024</time>
                      <p class="mt-8 text-base max-md:mr-1.5">
                        O Festival EcoSound que já vai para a sua 3ª edição, conta com dezenas de medidas inovadoras que o tornam o mais sustentável de Portugal.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
  
        <section class="flex flex-col justify-center items-center px-20 py-24 w-full text-white bg-slate-500 max-md:px-5 max-md:max-w-full" aria-label="Newsletter subscription">
            <div class="flex flex-col w-full max-w-[1415px] max-md:max-w-full">
                <h2 class="self-center text-6xl font-bold text-center max-md:max-w-full max-md:text-4xl">
                    SUBSCREVER A NOSSA NEWSLETTER
                </h2>
                <form class="mt-20 max-md:mt-10" @submit.prevent="handleSubmit">
                    <label for="email" class="sr-only">Email address</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        class="w-full text-xl bg-white rounded-md border-2 border-solid border-neutral-400 text-zinc-400 p-4"
                        placeholder="Email address"
                        required
                        aria-required="true"
                    />
                    <div class="mt-1 text-xs text-center">
                        <a href="/privacy" class="hover:underline focus:outline-none focus:ring-2 focus:ring-green-400">Privacy policy</a> / 
                        <a href="/terms" class="hover:underline focus:outline-none focus:ring-2 focus:ring-green-400">Terms and conditions</a>
                    </div>
                    <button 
                        type="submit"
                        class="block mx-auto px-16 py-3 mt-14 max-w-full text-2xl text-center whitespace-nowrap bg-green-400 w-[262px] hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 max-md:px-5 max-md:mt-10"
                    >
                    Subscrever
                    </button>
                </form>
            </div>
        </section>
        </main>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
  
export default defineComponent({
    name: 'FestivalLayout',
    methods: {
        handleSubmit(event: Event) {
        // Handle form submission
        }
    }
})
</script>