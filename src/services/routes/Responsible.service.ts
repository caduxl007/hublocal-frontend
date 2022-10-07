import { ICreateResponsibleFormData } from '../../models/responsible';
import api from '../api';

export async function createResponsible(data: ICreateResponsibleFormData) {
  const response = await api.post('/responsibles', data);

  return response;
}
