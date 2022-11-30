import { request } from "./api";

export const getDoctors = () => request.get('doctors');

export const getAvailabilities = (doctorId: string) => request.get(`availabilities?doctorId=${doctorId}`);

export const bookDoctor = (doctorId: string, data: { doctorId: string; date: string }) => request.post(
  'bookings',
  data,
);
