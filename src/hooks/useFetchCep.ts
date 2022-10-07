import { useEffect } from 'react';
import { useState } from 'react';
import { IAddress } from '../models/address';
import { getAddressByCep } from '../utils/getAddressByCep';

export function useFetchCep(cep: string) {
  const [address, setAddress] = useState<null | IAddress>({} as IAddress);

  useEffect(() => {
    const getData = setTimeout(async () => {
      if (cep.trim()) {
        const data = await getAddressByCep(cep);

        setAddress(data);
      }
    }, 2000);

    return () => clearTimeout(getData);
  }, [cep]);

  return { address };
}
