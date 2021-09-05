import { axiosBase } from '.';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
};

export interface IBody {
    username: string,
    password: string,
}

const AuthApi = {
    post: (url:string, data:IBody) => axiosBase.post(`${url}`, data, {
        headers,
    }),
};

export { AuthApi };
