import Vue from 'vue'
import Vuex from 'vuex'
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import auth from "@/store/auth/state.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: {},
    dailySchedule: {},
    errors: [],
  },
  getters,
  mutations,
  actions,

  modules: {
    auth,
  }
})
