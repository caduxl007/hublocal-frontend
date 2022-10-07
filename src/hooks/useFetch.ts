import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetch, setIsFetch] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadingData() {
      try {
        const response = await api.get(url);

        setData(response.data);
      } catch (err: any) {
        toast.error(err?.response?.data?.message);
        setError(err);
      } finally {
        setIsFetch(false);
        setIsLoading(false);
      }
    }

    if (isFetch) {
      loadingData();
    }
  }, [url, isFetch]);

  return { data, error, isLoading, setIsFetch };
}
