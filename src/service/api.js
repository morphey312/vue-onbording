import axios from 'axios';
import store from "@/store/state";
import router from "@/router";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const config = {
    baseURL: 'http://backend.dev/api/',
    headers: {
        "content-type": "application/json",
    }
}
const apiToken = localStorage.getItem("authToken");
if (apiToken) {
    config.headers.Authorization = `Bearer ${apiToken}`;
}
const axiosInstance = axios.create(config);

// axiosInstance.interceptors.request.use(function(config) {
//     config.headers.common = {
//         Authorization: 'Bearer ' + localStorage.getItem("authToken"),
//         "Content-Type": "application/json",
//     };
// })


// axiosInstance.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response.status === 422) {
//             store.commit("setErrors", error.response.data.errors);
//         } else if (error.response.status === 401) {
//             store.commit("auth/setUserData", null);
//             localStorage.removeItem("authToken");
//             router.push({ name: "Login" });
//         } else {
//             return Promise.reject(error);
//         }
//     }
// );

export {
    axiosInstance
}