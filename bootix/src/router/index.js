import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/DetailsView.vue";
import ComingSoonView from "../views/ComingSoonView.vue";
import NowShowingView from "../views/NowShowingView.vue";
import SelectDateView from "../views/SelectDateView.vue";
import loginView from "../views/loginView.vue";
import promotionView from "../views/promotionView.vue";
import TicketView from "../views/TicketView.vue";
import SelectSeatsView from "../views/SelectSeatsView.vue";
import PaymentView from "../views/PaymentView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: loginView,
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
  {
    path: "/movie/selectdate",
    name: "select date",
    component: SelectDateView,
  },
  {
    path: "/movie/promotions",
    name: "promotions",
    component: promotionView,
  },
  {
    path: "/movie/ticket",
    name: "ticket",
    component: TicketView,
  },
  {
    path: "/movie/seats",
    name: "seats",
    component: SelectSeatsView,
  },
  {
    path: "/movie/payment",
    name: "payment",
    component: PaymentView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.name !== "login" &&
    to.name !== "home" &&
    to.name !== "promotions" &&
    to.name !== "detail" &&
    to.name !== "coming soon" &&
    to.name !== "now showing" &&
    !localStorage.getItem("access_token")
  ) {
    next({ name: "login" });
  } else if (to.name === "login" && localStorage.getItem("access_token")) {
    next("/");
  } else {
    next();
  }
});

export default router;
