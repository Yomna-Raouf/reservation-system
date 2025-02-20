import api from './api';

export const disableReservationsRequest = (accepts_reservations: boolean) => {
  return api.put('branches', { accepts_reservations });
};
