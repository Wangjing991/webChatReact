import axios, {AxiosRequestConfig} from "axios";
import {getToken} from "./authorization";

const {REACT_APP_API_URL} = process.env;

axios.defaults.baseURL = REACT_APP_API_URL

axios.interceptors.response.use(res => {
  console.log(res, 'axios.interceptors')
  return res.data
})
const getAxios = (url: string, data?: any) => {
  return axios.get(url, {params: data})
}

const service = (params: AxiosRequestConfig, token?: string) => {
  if (token) {
    const {headers = {}} = params;
    headers["Authorization"] = `Bearer ${token}`;
  }
  return axios(params);
}

const transport = (params: AxiosRequestConfig) => {
  const token = getToken();
  if (token) {
    return service(params, token);
  } else {
    return service(params);
  }
}

export {getAxios};

export default transport;
