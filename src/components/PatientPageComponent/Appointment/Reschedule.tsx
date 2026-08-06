import { useMemo, useState } from "react";
import { X, CircleAlert } from "lucide-react";

import Button from "../../Button";
import ViewRescheduledAppointment from "../../../components/PatientPageComponent/Appointment/ViewRescheduledAppointment";
import RescheduledConfirmationModal from "./RescheduledConfirmationModal";
import { appointmentService } from "../../../API/services/AppointmentService";

import type { IAppointment } from "../../../types/appointment";

type Props = {
  appointment: IAppointment;
  onClose: () => void;
  onRescheduled: (appointment: IAppointment) => void;
};

export default function Reschedule({
  appointment,
  onClose,
  onRescheduled,
}: Props) {
  const doctor = appointment.doctor;

  const [selectedDate, setSelectedDate] = useState(appointment.date);
  const [selectedTime, setSelectedTime] = useState(appointment.time);
  const [error, setError] = useState<string | null>(null);
  const [showReview, setShowReview] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [updatedAppointment, setUpdatedAppointment] =
    useState<IAppointment | null>(null);
  const appointmentDate = useMemo(
    () => new Date(appointment.date),
    [appointment.date],
  );

  const today = useMemo(() => new Date(), []);

  const canReschedule = useMemo(() => {
    const diff = appointmentDate.getTime() - today.getTime();

    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return days >= 7;
  }, [appointmentDate, today]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pickedDate = e.target.value;

    const chosen = new Date(pickedDate);
    const today = new Date();

    if (chosen < new Date(today.toDateString())) {
      setError("You cannot select a past date.");
      return;
    }

    setError(null);
    setSelectedDate(pickedDate);
    setSelectedTime("");
  };

  const getDayName = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
    });

  const matchingSlots = useMemo(() => {
    if (!selectedDate) return [];

    const selectedDay = getDayName(selectedDate);

    return doctor.availableTime.filter((slot) => slot.day === selectedDay);
  }, [doctor.availableTime, selectedDate]);

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    if (!selectedDate || !selectedTime) return;

    setShowReview(true);
  };

  const handleConfirmReschedule = async () => {
    try {
      const { appointment: updatedAppointment } =
        await appointmentService.rescheduleAppointment({
          appointmentId: appointment._id,
          date: selectedDate,
          time: selectedTime,
        });
      setUpdatedAppointment(updatedAppointment);

      setShowReview(false);
      setShowConfirmation(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (showConfirmation) {
    const parsedDate = new Date(selectedDate);

    const day = parsedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    return (
      <RescheduledConfirmationModal
        docName={doctor.docName}
        day={day}
        time={selectedTime}
        onMessageDoctor={() => {
          console.log("message");
        }}
        onViewAppointment={() => {
          if (!updatedAppointment) return;
          onRescheduled(updatedAppointment);
          onClose();
        }}
        onClose={onClose}
      />
    );
  }

  if (showReview) {
    return (
      <ViewRescheduledAppointment
        appointment={appointment}
        newDate={selectedDate}
        newTime={selectedTime}
        onBack={() => setShowReview(false)}
        onClose={onClose}
        onRescheduled={handleConfirmReschedule}
      />
    );
  }

  if (!canReschedule) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-[500px] p-8 text-center">
          <CircleAlert size={40} className="mx-auto mb-4 text-red-500" />

          <h2 className="text-xl font-semibold mb-2">Unable to Reschedule</h2>

          <p className="text-gray-600 mb-6">
            Appointments can only be rescheduled at least 7 days before the
            scheduled date.
          </p>

          <Button type="button" content="Close" onClick={onClose} />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="w-135 bg-white rounded-lg relative">
        <button
          type="button"
          className="absolute top-5 right-5"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <h1 className="fontOutfit font-semibold text-[22px] px-6 pt-6">
          Reschedule Appointment
        </h1>

        <p className="fontOutfit text-[#605E5E] px-6">
          Select a new appointment date and time.
        </p>

        <div className="h-px bg-[#E7E4E4] mt-5" />

        <div className="px-6 py-6">
          <div className="flex gap-3 bg-[#EAF4FF] rounded-lg p-4 mb-6">
            <CircleAlert size={20} color="#0079FF" />

            <p className="text-sm text-[#3E3B3B]">
              You can only reschedule appointments at least 7 days before the
              scheduled date.
            </p>
          </div>

          <label className="block font-medium mb-2">Select a New Date</label>

          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="w-full border border-[#D7D7D7] rounded-md p-3"
          />

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <h2 className="font-medium mt-6 mb-3">Time Slots</h2>

          <div className="grid grid-cols-3 gap-3">
            {!selectedDate ? (
              <p className="col-span-3 text-gray-500">Select a date first.</p>
            ) : matchingSlots.length > 0 ? (
              matchingSlots.map((slot) => (
                <button
                  key={slot.start}
                  type="button"
                  onClick={() => handleTimeClick(slot.start)}
                  className={`border rounded-lg h-14 transition ${
                    selectedTime === slot.start
                      ? "bg-[#28574E] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {slot.start}
                </button>
              ))
            ) : (
              <p className="col-span-3 text-gray-500">
                No available slots for this day.
              </p>
            )}
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button
              type="button"
              variant="outline"
              content="Keep Appointment"
              onClick={onClose}
            />

            <Button
              type="button"
              content="Next"
              onClick={handleNext}
              disabled={!selectedDate || !selectedTime}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
