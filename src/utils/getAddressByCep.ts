import axios from 'axios';
import { IAddress } from '../models/address';

export async function getAddressByCep(cep: string): Promise<IAddress> {
  const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  const formattedAddres = {
    cep,
    state: data.uf,
    complement: data.complemento,
    neighborhood: data.bairro,
    city: data.localidade,
    street: data.logradouro,
  } as IAddress;

  return formattedAddres;
}
