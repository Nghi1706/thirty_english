import axiosRequest from "./api"

const accountAPI = {
    login: (params) => {
        const url = 'account/login';
        return axiosRequest.post(url, params);
    },
    adminRegister: (params) => {
        const url = 'account/createAccount'
        return axiosRequest.post(url, params);
    }
}

export default accountAPI