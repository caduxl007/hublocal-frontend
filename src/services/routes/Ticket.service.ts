import api from '../api';

export async function deleteTicket(id: string) {
  await api.delete(`/tickets/${id}`);
}

export async function editTicket(id: string, status: string) {
  await api.patch(`/tickets/${id}`, {
    status,
  });
}
