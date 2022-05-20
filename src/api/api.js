import axios from "axios";
import queryString from 'query-string';

const axiosRequest = axios.create({
    baseURL: 'http://localhost:8080/api/',
    paramsSerializer: params => queryString.stringify(params)
});
axiosRequest.interceptors.request.use(async (config) => {
    return config
});
axiosRequest.interceptors.response.use((response) => {
    return response;
}, (error) => { throw error });
export default axiosRequest;