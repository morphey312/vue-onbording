import axios from 'axios';

const config = {
    baseURL: 'http://backend.dev/api/'
}

const axiosInstance = axios.create(config);

export {
    axiosInstance
}