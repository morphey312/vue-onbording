import {axiosInstance} from "@/service/api";
import router from "@/router";

export default {
    getUserData({ commit }, token=null) {
        if(!token) {
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        axiosInstance.get("user")
            .then(response => {
                commit("setUserData", response.data);
            })
            .catch(() => {
                localStorage.removeItem("authToken");
                commit("setApiToken", null);
            });
    },
    sendLoginRequest({ commit }, data) {
        commit("setErrors", {}, { root: true });
        return axiosInstance.post('login', data)
            .then(response => {
                commit("setUserData", response.data.user);
                localStorage.setItem("authToken", response.data.token);
                commit("setApiToken", response.data.token);
            }).catch(err => {
            console.log(err)
        });
    },
    sendRegisterRequest({ commit }, data) {
        commit("setErrors", {}, { root: true });
        return axiosInstance.post("register", data)
            .then(response => {
                commit("setUserData", response.data.user);
                localStorage.setItem("authToken", response.data.token);
                commit("setApiToken", response.data.token);
            })
            .catch(err => console.log(err));
    },
    sendLogoutRequest({ commit }) {
        return axiosInstance.post("logout").then(() => {
            commit("setUserData", null);
            localStorage.removeItem("authToken");
        });
    },
}