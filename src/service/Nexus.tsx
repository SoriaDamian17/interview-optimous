import { axiosBase } from '.';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.NXtoken}`,
};

export interface IBodyDataSource {
    title: string,
    code: string,
    // eslint-disable-next-line camelcase
    connection_id: number,
    query: string,
    parameters:{
        name: string,
        type: string,
        // eslint-disable-next-line camelcase
        default_value: string,
    }[]
}

export interface IBodyConnection {
    title: string,
    type: string,
    // eslint-disable-next-line camelcase
    connection_data: string,
}

const NexusApi = {
    get: (url:string) => axiosBase.get(`/catalogs/${url}`, {
            headers,
        }),
    post: (url:string, data: any) => axiosBase.post(`/catalogs/${url}`, data, {
            headers,
        }),
    put: (url: string, data: any) => axiosBase.put(`/catalogs/${url}`, data, {
        headers,
    }),
};

export { NexusApi };
