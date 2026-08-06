import Button from "../../Button";
import { X } from "lucide-react";
import type { IAppointment } from "../../../types/appointment";

type Props = {
  appointment: IAppointment;
  newDate: string;
  newTime: string;
  onBack: () => void;
  onClose: () => void;
  onRescheduled: () => void;
};

export default function ViewRescheduledAppointment({
  appointment,
  newDate,
  newTime,
  onBack,
  onClose,
  onRescheduled,
}: Props) {
  const { doctor, department, reason } = appointment;

  const parsedDate = new Date(newDate);

  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="w-131.75 max-w-full rounded-lg bg-white">
        <div className="px-6 pt-5 relative">
          <h1 className="fontOutfit font-semibold text-[22px]">
            Review Your Rescheduled Appointment
          </h1>

          <p className="fontOutfit text-[16px] text-[#605E5E] pb-3">
            Please confirm your updated appointment details.
          </p>

          <button
            type="button"
            className="absolute top-5 right-5"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="w-full h-0.5 bg-[#E7E4E4]" />

        <div className="px-6 py-5">
          <h1 className="text-[18px] fontOutfit font-medium pb-4">
            Review Your Appointment
          </h1>

          <div className="flex gap-2">
            <img
              className="w-[69.8px] h-12.75 rounded-[4.01px]"
              src={doctor.docImg}
              alt={doctor.docName}
            />

            <div className="flex flex-col gap-1">
              <h1 className="text-[#141313] fontOutfit font-medium text-[20px]">
                {doctor.docName}
              </h1>

              <p className="text-[#605E5E] fontOutfit font-light text-[16px]">
                {department} Department
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#D9D9D9] mt-5 pt-5">
            <ul className="space-y-2 text-[#757575] font-light text-[16px] fontOutfit">
              <li>Department</li>
              <li>Date</li>
              <li>Time</li>
              <li>Reason</li>
            </ul>

            <ul className="space-y-2 text-[16px] fontOutfit font-normal text-right">
              <li>{department}</li>
              <li>{formattedDate}</li>
              <li>{newTime}</li>
              <li>{reason}</li>
            </ul>
          </div>

          <div className="flex gap-5 pt-12">
            <Button
              type="button"
              variant="outline"
              content="Back"
              onClick={onBack}
              className="bg-gray-200 hover:bg-gray-300"
            />

            <Button
              type="button"
              content="Confirm Appointment"
              onClick={onRescheduled}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
