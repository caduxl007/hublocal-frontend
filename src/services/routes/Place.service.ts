import { ICreatePlaceFormData } from '../../models/place';
import api from '../api';

export async function createPlace(
  idCompany: string,
  data: ICreatePlaceFormData,
) {
  const response = await api.post('/places', {
    ...data,
    companyId: idCompany,
  });

  return response;
}

export async function deletePlace(id: string) {
  await api.delete(`/places/${id}`);
}

export async function editPlace(id: string, data: ICreatePlaceFormData) {
  await api.patch(`/places/${id}`, {
    ...data,
  });
}
