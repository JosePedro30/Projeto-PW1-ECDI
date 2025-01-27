import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import Atividades from '../views/Atividades.vue';
import Bilhetes from '../views/Bilhetes.vue';
import Cartaz from '../views/Cartaz.vue';
import InfoUtil from '../views/InfoUtil.vue';
import Login from '../views/Login.vue';
import Merchandising from '../views/Merchandising.vue';
import CausaVerde from '../views/CausaVerde.vue';
import ProductCard from '../components/ProductCard.vue';
import SiteFooter from '../components/SiteFooter.vue';

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/atividades', name: 'Atividades', component: Atividades },
  { path: '/bilhetes', name: 'Bilhetes', component: Bilhetes },
  { path: '/cartaz', name: 'Cartaz', component: Cartaz },
  { path: '/info', name: 'InfoUtil', component: InfoUtil },
  { path: '/login', name: 'Login', component: Login },
  { path: '/merchandising', name: 'Merchandising', component: Merchandising },
  { path: '/causa-verde', name: 'CausaVerde', component: CausaVerde },
  { path: '/product-card', name: 'ProductCard', component: ProductCard },
  { path: '/site-footer', name: 'SiteFooter', component: SiteFooter },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
