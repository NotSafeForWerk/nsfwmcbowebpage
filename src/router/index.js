import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import AboutView from "../views/AboutView.vue";
import TeeView from "../views/TeeView.vue";
import ServicesView from '../views/ServicesView.vue';
import NsfwclothingView from '../views/NsfwclothingView.vue';
import TeeDetails from '../components/TeeDetails.vue';
import MugDetails from '../components/MugDetails.vue';
import FaqView from "../views/FaqView.vue";
import TermsView from "../views/TermsView.vue";
import ShopView from "../views/ShopView.vue";
import MugView from "../views/MugView.vue";
import Order from "../components/Order.vue";


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
      path: "/mugs",
      name: "mugs",
      component: MugView,
    },
    {
      path: "/tshirt",
      name: "tshirt",
      component: TeeDetails,
    },
    {
      path: "/mug",
      name: "mug",
      component: MugDetails,
    },
    {
      path: "/orders",
      name: "orders",
      component: Order,
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
    {
      path: "/faq",
      name: "faq",
      component: FaqView,
    },
    {
      path: "/terms",
      name: "terms",
      component: TermsView,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView,
    },
  ],
});

export default router;
