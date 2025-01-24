<script lang="ts">
import { defineComponent } from 'vue';

interface SocialLink {
  src: string;
  alt: string;
  href: string;
}

interface ContactIcon {
  src: string;
  alt: string;
}

export default defineComponent({
  name: 'Footer',
  data() {
    return {
      contactIcons: [
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/28f1fb91428feb8dce531aeb5d7929351a8e4d9b455c751bcc3999f1cfba9e3d?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637', alt: 'Location icon' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/603cabd5fc547c1c721376dcb3d8d2655e6c43d3ff4b235f6f05f4c58b7fbed9?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637', alt: 'Email icon' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30d7a4b90d72e7d0961b782105ca11e84a7371136f1d871713f155167fecf3f8?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637', alt: 'Phone icon' }
      ] as ContactIcon[],
      socialLinks: [
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13a28ff6321176bc84b7b3a091c8f688db5c3c1cdb040ad839369f8c70bc603a?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637', alt: 'Facebook', href: '#' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4b741ab20ed72ce033ecb59baead5f2a0c5b6cd681a98ebecfc70f45dcb3c129?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637', alt: 'Instagram', href: '#' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7658bedfc94bba56a59dbd46aff58b96376dffbdfc2b41bff57fcaefe4e0456b?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637', alt: 'Twitter', href: '#' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eb93e4aadc30b6aac01c15aa8f6d4e2c122d84b4e9adb764c1c3580ffeee5de3?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637', alt: 'YouTube', href: '#' }
      ] as SocialLink[]
    }
  }
})
</script>

<template>
  <footer class="flex flex-col py-7 w-full bg-orange-50 max-md:max-w-full" role="contentinfo">
    <div class="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1814px] max-md:max-w-full">
      <div class="flex flex-wrap gap-5">
        <div class="flex flex-col self-end mt-14 max-md:mt-10">
          <img
            v-for="(icon, index) in contactIcons"
            :key="index"
            :src="icon.src"
            :alt="icon.alt"
            loading="lazy"
            class="object-contain mt-6 aspect-square w-[35px] first:w-[39px] first:mt-0 last:max-md:mr-0.5"
          />
        </div>
        <address class="flex-auto text-2xl text-black leading-[60px] max-md:max-w-full not-italic">
          <span class="text-3xl font-bold">Contatos</span>
          <br />
          <a href="mailto:ecofestivalsound@gmail.com" class="hover:underline">ecofestivalsound@gmail.com</a>
          <br />
          <a href="tel:+351913471533" class="hover:underline">+351 913 471 533</a>
          <br />
          <span>Idanha-a-Nova 39.968830, -7.181986 Alcafozes</span>
        </address>
      </div>
      <div class="flex flex-col self-end mt-24 max-md:mt-10">
        <h2 class="self-center text-3xl font-bold text-center text-black">Siga-nos</h2>
        <nav class="flex gap-5 justify-between mt-6" aria-label="Social media links">
          <a
            v-for="(social, index) in socialLinks"
            :key="index"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            <img
              :src="social.src"
              :alt="social.alt"
              loading="lazy"
              class="object-contain shrink-0 w-10 aspect-square"
            />
          </a>
        </nav>
      </div>
    </div>
    <div class="flex mt-6 w-full bg-black min-h-[4px] max-md:max-w-full" role="separator"></div>
    <div class="self-start mt-9 ml-11 text-2xl text-center text-black max-md:max-w-full">
      © {{ new Date().getFullYear() }} Festival Eco Sound All Rights Reserved.
    </div>
  </footer>
</template>