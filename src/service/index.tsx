import axios from 'axios';

const axiosBase = axios.create({
    baseURL: 'https://hernanttest1.formed.ai/api/v2',
    responseType: 'json',
});

const cancelSource = axios.CancelToken.source();

export {
    axiosBase,
    cancelSource,
};
