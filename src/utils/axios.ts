import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// next
// import { getSession } from 'next-auth/react';
// import { NextRouter } from 'next/router';

const axiosServices = axios;
axiosServices.defaults.baseURL = process.env.NEXT_APP_API_URL;
axiosServices.defaults.timeout = 1000 * 60;

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

axiosServices.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401 && !window.location.href.includes('/login')) {
      window.location.pathname = '/login';
    }
    return Promise.reject((error.response && error.response.data) || 'Wrong Services');
  }
);

const fetchGet = <Input, Output>(url: string, config?: AxiosRequestConfig<Input>) => {
  return axios.get<Output, AxiosResponse<Output, Input>, Input>(url, config);
};

const fetchPost = <Input, Output>(url: string, data: Input, config?: AxiosRequestConfig<Input>) => {
  return axios.post<Output, AxiosResponse<Output, Input>, Input>(url, data, config);
};

const fetchPut = <Input, Output>(url: string, data: Input, config?: AxiosRequestConfig<Input>) => {
  return axios.put<Output, AxiosResponse<Output, Input>, Input>(url, data, config);
};

const fetchPatch = <Input, Output>(url: string, data: Input, config?: AxiosRequestConfig<Input>) => {
  return axios.patch<Output, AxiosResponse<Output, Input>, Input>(url, data, config);
};
const fetchDelete = <Input, Output>(url: string, config?: AxiosRequestConfig<Input>) => {
  return axios.delete<Output, AxiosResponse<Output, Input>, Input>(url, config);
};

export default {
  get: fetchGet,
  post: fetchPost,
  put: fetchPut,
  patch: fetchPatch,
  delete: fetchDelete
};
