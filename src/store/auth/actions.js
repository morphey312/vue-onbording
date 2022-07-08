import {axiosInstance} from "@/service/api";

export default {
    getUserData({ commit }) {
        axiosInstance.get("user")
            .then(response => {
                commit("setUserData", response.data);
            })
            .catch(() => {
                localStorage.removeItem("authToken");
            });
    },
    sendLoginRequest({ commit }, data) {
        commit("setErrors", {}, { root: true });
        return axiosInstance.post('login', data)
            .then(response => {
                commit("setUserData", response.data.user);
                localStorage.setItem("authToken", response.data.token);
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