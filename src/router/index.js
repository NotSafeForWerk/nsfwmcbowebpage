import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import AboutView from "../views/AboutView.vue";
import TrippyView from "../views/TrippyView.vue";
import KeycapzView from "../views/KeycapzView.vue";
import ServicesView from '../views/ServicesView.vue'
import NsfwclothingView from '../views/NsfwclothingView.vue'
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
      path: "/:projects",
      name: "projects",
      component: ProjectView,
    },
    {
      path: "/trippy",
      name: "trippy",
      component: TrippyView,
    },
    {
      path: "/keycapz",
      name: "keycapz",
      component: KeycapzView,
    },    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },  {
      path: "/nsfwclothing",
      name: "nsfwclothing",
      component: NsfwclothingView,
    },
  ],
});

export default router;
