import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '../views/PageNotFound.vue'
import additionalRoutes from "@/router/routes/routes";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '*',
    component: PageNotFound
  },
  ...additionalRoutes
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: "is-active-route",
  linkExactActiveClass: "is-active-exact-route",
  base: process.env.BASE_URL,
  routes
})

export default router
