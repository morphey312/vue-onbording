import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import ToDoItem from "@/components/ToDoItem";
import store from './store/state.js'


Vue.config.productionTip = false

Vue.component('to-do-item', ToDoItem)

Vue.directive('focus', {
  inserted: function (el, binding) {
    el.focus();
    console.log(`Derective's name: ${binding.name}`);
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
