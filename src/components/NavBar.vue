<script lang="ts">
import { defineComponent } from 'vue'

interface NavigationItem {
  text: string;
  href: string;
}

export default defineComponent({
  name: 'NavigationBar',
  data() {
    return {
      navigationItems: [
        { text: 'Cartaz', href: '/cartaz' },
        { text: 'Bilhetes', href: '/bilhetes' },
        { text: 'Atividades', href: '/atividades' },
        { text: 'Merchandising', href: '/merchandising' },
        { text: 'Info Útil', href: '/info' },
        { text: 'Causa Verde', href: '/causa-verde' }
      ] as NavigationItem[]
    }
  }
})
</script>

<template>
  <nav
    class="flex z-10 gap-5 justify-between items-center px-9 py-6 w-full bg-slate-500 max-md:px-5 max-md:max-w-full"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="flex flex-col justify-center self-stretch p-2.5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/700a0dbe14fdf03587da6d363014556623a5a9c4559d50208b2af8dbbc2d2c08?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637"
        class="object-contain aspect-[4.37] w-[253px]"
        alt="Company Logo"
      />
    </div>
    <div
      class="flex flex-wrap gap-10 self-stretch my-auto text-4xl font-bold text-center text-white max-md:max-w-full"
      role="menubar"
    >
      <a
        v-for="item in navigationItems"
        :key="item.text"
        :href="item.href"
        class="gap-2.5 self-stretch p-2.5 whitespace-nowrap hover:underline focus:outline-none focus:ring-2 focus:ring-white"
        role="menuitem"
        tabindex="0"
      >
        {{ item.text }}
      </a>
    </div>
    <div class="flex gap-5 self-stretch my-auto">
      <a
        href="/search"
        class="flex gap-2.5 items-center p-2.5 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Search"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b938be08d6a2c8966ad0eb6b50a8d2adef44ed958cf104d1e40df1fa552c4ef6?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637"
          class="object-contain self-stretch my-auto aspect-square w-[38px]"
          alt=""
        />
      </a>
      <a
        href="/profile"
        class="flex gap-2.5 items-center p-2.5 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="User profile"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/713fd5f8d7c6fb79ea8b0da616ab879d0c699836c2f027d659bf262ba56c32b7?placeholderIfAbsent=true&apiKey=7cf9ab7765004c278c4384db27161637"
          class="object-contain self-stretch my-auto aspect-square w-[38px]"
          alt=""
        />
      </a>
    </div>
  </nav>
</template>