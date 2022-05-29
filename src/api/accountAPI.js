import axiosRequest from "./api"

const accountAPI = {
    login: (params) => {
        const url = 'account/login';
        return axiosRequest.post(url, params);
    },
    adminRegister: (params) => {
        const url = 'account/createAccount'
        return axiosRequest.post(url, params);
    },
    getAllAccount: () => {
        const url = 'account/getAllAccount';
        return axiosRequest.get(url);
    },
    changeStatus: (email) => {
        const url = 'account/changeStatus/' + email;
        return axiosRequest.put(url, '');
    },
    getAccount: (username) => {
        const url = 'account/getAccountsByUsername' + '?username=' + username;
        return axiosRequest.get(url);
    }
}

export default accountAPI