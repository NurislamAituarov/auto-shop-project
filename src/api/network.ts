import axios, { Method } from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const request = (method: Method, url: string, data: any) => {
  return instance({
    method,
    url,
    data,
  });
};

export const get = (url: string, params?: any) => request('get', url, { params });
export const post = (url: string, data: any) => request('post', url, data);
