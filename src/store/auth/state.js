import getters from "@/store/auth/getters";
import mutations from "@/store/auth/mutations";
import actions from "@/store/auth/actions";


export default {
  namespaced: true,
  state: () => ({
    userData: null
  }),
  getters,
  mutations,
  actions,
}
