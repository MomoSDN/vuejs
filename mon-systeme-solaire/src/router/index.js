import { createRouter, createWebHistory } from 'vue-router';
import PlanetList from '../components/PlanetList.vue';
import PlanetDetails from '../components/PlanetDetails.vue';
import About from '../views/AboutView.vue';

const routes = [
  { path: '/', component: PlanetList },
  { path: '', component: PlanetList },
  { path: '/planet/:planetName', name: 'planet-details', component: PlanetDetails, props: true },
  { path: '/about', name: 'about', component: About}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
