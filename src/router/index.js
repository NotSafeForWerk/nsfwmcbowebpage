import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import AboutView from "../views/AboutView.vue";
import TeeView from "../views/TeeView.vue";
import ServicesView from '../views/ServicesView.vue';
import NsfwclothingView from '../views/NsfwclothingView.vue';
import TeeDetails from '../components/TeeDetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectView,
    },
    {
      path: "/tshirts",
      name: "tshirts",
      component: TeeView,
    },
    {
      path: "/teedetails",
      name: "teedetails",
      component: TeeDetails,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/nsfwclothing",
      name: "nsfwclothing",
      component: NsfwclothingView,
    },
  ],
});

export default router;
