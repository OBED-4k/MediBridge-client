import AppointmentCard from "./AppointmentCard";
import type { IAppointment } from "../../../types/appointment";
import EmptyAppointmentState from "./EmptyAppointmentState";
import { appointmentService } from "../../../API/services/AppointmentService";
import { useAppointments } from "../../../Hooks/Appointments/useAppointments";
type Props = {
  loading?: boolean;
  showLoading?: boolean;
  error: string | null;
  appointment: IAppointment | null;
  onView: (appointment: IAppointment) => void;
  onBookAppointment: () => void;
  onReschedule: (appointment: IAppointment) => void;
};

export default function UpcomingAppointmentSection({
  showLoading,
  error,
  appointment,
  onView,
  onBookAppointment,
  onReschedule,
}: Props) {
  const { fetchAppointments } = useAppointments();

  const handleCancel = async (id: string) => {
    try {
      await appointmentService.cancelAppointment(id);
      fetchAppointments();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-2/3 flex flex-col gap-3 fontOutfit">
      <p className="text-[24px] font-medium">Upcoming Appointment</p>

      {showLoading ? (
        <p>Loading appointments...</p>
      ) : error ? (
        <p>{error}</p>
      ) : appointment ? (
        <AppointmentCard
          appointment={appointment}
          onView={onView}
          onReschedule={onReschedule}
          onCancel={handleCancel}
        />
      ) : (
        <EmptyAppointmentState
          title="No upcoming appointmnets"
          description="You don’t have any scheduled hospital visits yet. Once you book an appointment, it will appear here"
          onButtonClick={onBookAppointment}
        />
      )}
    </div>
  );
}
