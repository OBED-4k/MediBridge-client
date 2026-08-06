import api from "../index";

import type {
  IBookAppointmentPayload,
  IBookAppointmentRes,
  IGetAppointmentsRes,
} from "../../types/apiReqRes";

import type { IAppointment } from "../../types/appointment";

export interface IRescheduleAppointmentPayload {
  appointmentId: string;
  date: string;
  time: string;
}

export interface IRescheduleAppointmentRes {
  success: boolean;
  message: string;
  appointment: IAppointment;
}

export const appointmentService = {
  async getAppointments(): Promise<IGetAppointmentsRes> {
    const { data } = await api.get<IGetAppointmentsRes>("/api/appointments");
    return data;
  },

  async bookAppointment(
    payload: IBookAppointmentPayload,
  ): Promise<IBookAppointmentRes> {
    const { data } = await api.post<IBookAppointmentRes>(
      "/api/bookAppointment",
      payload,
    );

    return data;
  },

  async cancelAppointment(id: string) {
    const { data } = await api.patch(`/api/appointment/${id}/cancel`);
    return data;
  },

  async rescheduleAppointment(
    payload: IRescheduleAppointmentPayload,
  ): Promise<IRescheduleAppointmentRes> {
    const { data } = await api.patch<IRescheduleAppointmentRes>(
      `/api/appointment/${payload.appointmentId}/reschedule`,
      payload,
    );

    return data;
  },
};
