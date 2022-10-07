import { ICreateCompanyFormData } from '../../models/company';
import api from '../api';

export async function createCompany(data: ICreateCompanyFormData) {
  const response = await api.post('/companies', data);

  return response;
}

export async function deleteCompany(id: string) {
  await api.delete(`/companies/${id}`);
}

export async function editCompany(id: string, data: ICreateCompanyFormData) {
  await api.patch(`/companies/${id}`, data);
}
