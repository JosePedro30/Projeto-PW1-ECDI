import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import Autenticacao from "@/components/Autenticacao.vue";
import Programa from "@/components/Programa.vue";
import Inscricoes from "@/components/Inscricoes.vue";
import { useUserStore } from "@/stores/userStore";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/autenticacao", name: "Autenticacao", component: Autenticacao },
  { path: "/programa", name: "Programa", component: Programa },
  { 
    path: "/inscricoes", 
    name: "Inscricoes", 
    component: Inscricoes, 
    meta: { requiresAuth: true }, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next("/auth");
  } else {
    next();
  }
});

export default router;

