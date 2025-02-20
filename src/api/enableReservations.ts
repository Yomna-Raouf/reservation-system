import api from './api';

export const enableReservationsRequest = (id: string) => {
  return api.put<any>(`branches/${id}`, { accepts_reservations: true });
};
