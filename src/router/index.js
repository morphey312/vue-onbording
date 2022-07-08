import Vue from 'vue'
import store from '../store/state.js'
import VueRouter from 'vue-router'
import WeekSchedule from '../views/WeekSchedule.vue'
import Auth from "../views/Auth";
import PageNotFound from '../views/PageNotFound.vue'
import additionalRoutes from "@/router/routes/routes";

Vue.use(VueRouter)

const routes = [
  {
    path: '/week-schedule',
    name: 'week-schedule',
    component: WeekSchedule,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'authenticate',
    component: Auth
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

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  let user = await store.getters['auth/user'];
  if (requiresAuth && !user) {
    next('/');
  } else {
    next();
  }
})

export default router
