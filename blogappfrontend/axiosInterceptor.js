import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
});

// Interceptor to inject token into headers
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = sessionStorage.getItem('logintoken'); // Corrected getItem
        if (accessToken) {
            if (config) {
                config.headers.token = accessToken; // Add token to headers
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
