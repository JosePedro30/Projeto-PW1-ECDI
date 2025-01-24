<template>
  <div id="app">
    <NavBar />
    <router-view /> <!-- Renderiza a página com base na rota -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>
