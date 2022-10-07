import axios, { AxiosError, AxiosInstance } from 'axios';
import { signOutChannel } from '../contexts/AuthContext';

export function setupAPIClient(): {
  api: AxiosInstance;
} {
  const token = localStorage.getItem('HubLocal:token');

  const api = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (
        error?.response?.status === 401 &&
        error?.response?.statusText === 'Unauthorized'
      ) {
        signOutChannel();
      }

      return Promise.reject(error);
    },
  );

  return {
    api,
  };
}
