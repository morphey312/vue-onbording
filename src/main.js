import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import ToDoItem from "@/components/ToDoItem";

Vue.config.productionTip = false

Vue.component('to-do-item', ToDoItem)

new Vue({
  render: h => h(App),
}).$mount('#app')
