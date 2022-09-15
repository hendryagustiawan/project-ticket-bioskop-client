import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/DetailsView.vue";
import ComingSoonView from "../views/ComingSoonView.vue";
import NowShowingView from "../views/NowShowingView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movie/:id",
    name: "detail",
    component: DetailsView,
  },
  {
    path: "/movie/comingsoon",
    name: "coming soon",
    component: ComingSoonView,
  },
  {
    path: "/movie/nowshowing",
    name: "now showing",
    component: NowShowingView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
