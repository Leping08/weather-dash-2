import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/radar",
    name: "radar",
    component: () =>
      import(/* webpackChunkName: "radar" */ "../views/Radar.vue")
  },
  {
    path: "/satellite",
    name: "satellite",
    component: () =>
      import(/* webpackChunkName: "satellite" */ "../views/Satellite.vue")
  },
  {
    path: "/live",
    name: "live",
    component: () => import(/* webpackChunkName: "live" */ "../views/Live.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "text-white bg-gray-900",
  routes
});

export default router;
