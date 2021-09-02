import { axiosBase } from '.';

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.NXtoken}`,
};

export interface IBody {
    title: string,
    code: string | number,
    connection: string,
    query: string
}

const DataSourceApi = {
    get: (url:string) => axiosBase.get(`/catalogs/${url}`, {
            headers,
        }),
    post: (url:string, data:IBody) => axiosBase.post(`/catalogs/${url}`, data, {
            headers,
        }),
    put: (url: string, data:IBody) => axiosBase.put(`/catalogs/${url}`, data, {
        headers,
    }),
};

export { DataSourceApi };
