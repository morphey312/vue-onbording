import axios from 'axios';
const config = {
    baseURL: 'http://backend.dev/api/',
    headers: {
        "content-type": "application/json",
    }
}
const apiToken = localStorage.getItem("authToken");
if (apiToken) {
    config.headers = {
            Authorization: `Bearer ${apiToken}`,
            "content-type": "application/json",
        }
}
const axiosInstance = axios.create(config);

export {
    axiosInstance
}