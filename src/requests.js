import axios from "axios";
import axiosRetry from "axios-retry";
import store from "./store";

// create a new axios instance
const instance = axios.create({
  baseURL: "https://hirer-be.herokuapp.com/api/v1",
  withCredentials: true,
});

/**
 * Get number of times to delay a request retry
 *
 * @param {number} [retryNumber=0]
 * @return {number}
 */
const retryDelay = (retryNumber = 0) => {
  const seconds = Math.pow(2, retryNumber) * 1000;
  const randomMs = 1000 * Math.random();
  return seconds + randomMs;
};

instance.interceptors.request.use((config) => {
  if (store.getState().auth.token)
    config.headers.Authorization = `Bearer ${store.getState().auth.token}`;
  return config;
});

// Retry failed requests
axiosRetry(instance, {
  retries: 3,
  retryDelay,
  retryCondition: axiosRetry.isRetryableError,
});

/**
 * Performs a GET request
 *
 * @param  {string} path - API url for GET request
 * @returns {Promise<AxiosResponse<any>>} - A response with a typeof AxiosResponse
 */
export const sendGetRequest = async (path) => {
  const response = await instance({
    url: path,
    method: "get",
  });
  return response;
};

/**
 * Performs a POST request
 *
 * @param  {string} path - API url for POST request
 * @param  {Object} params - The data to be sent along with the request
 * @returns {Promise<AxiosResponse<any>>} - A response with a typeof AxiosResponse
 */
export const sendPostRequest = async (path, params) => {
  const response = await instance({
    url: path,
    method: "post",
    data: params,
  });
  return response;
};

/**
 * Performs a DELETE request
 *
 * @param  {string} path - API url for DELETE request
 * @returns {Promise<AxiosResponse<any>>} - A response with a typeof AxiosResponse
 */
export const sendDeleteRequest = async (path) => {
  const response = await instance({
    url: path,
    method: "delete",
  });
  return response;
};

/**
 * Performs a PUT request
 *
 * @param  {string} path - API url for PUT request
 * @param  {Object} params - The data to be sent along with the request
 * @returns {Promise<AxiosResponse<any>>} - A response with a typeof AxiosResponse
 */
export const sendPutRequest = async (path, params) => {
  const response = await instance({
    url: path,
    method: "patch",
    data: params,
  });
  return response;
};

const requests = [sendGetRequest, sendPostRequest, sendDeleteRequest];
export default requests;
