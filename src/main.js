import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import ToDoItem from "@/components/ToDoItem";
import store from './store/state.js'
import axios from "axios";


Vue.config.productionTip = false
Vue.component('to-do-item', ToDoItem)
Vue.directive('focus', {
  inserted: function (el, binding) {
    el.focus();
    console.log(`Derective's name: ${binding.name}`);
  }
})

axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 422) {
        store.commit("setErrors", error.response.data.errors);
      } else if (error.response.status === 401) {
        store.commit("auth/setUserData", null);
        localStorage.removeItem("authToken");
        router.push({ name: "Login" });
      } else {
        return Promise.reject(error);
      }
    }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
