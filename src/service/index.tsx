import axios from 'axios';

const axiosBase = axios.create({
    baseURL: '',
    responseType: 'json',
});

const cancelSource = axios.CancelToken.source();

export {
    axiosBase,
    cancelSource,
};
