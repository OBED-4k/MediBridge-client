import { TfiClose } from "react-icons/tfi";
import { useState } from "react";

type Props = {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  selectedTime: string;
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
];

export default function BookAppointmentStep3({ onClose, setStep }: Props) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-131.75 rounded-lg border border-[#E8E6E6] bg-white shadow-lg">
        <div className="flex items-start p-6 justify-between">
          <div>
            <h2 className="text-[22px] fontOutfit font-semibold">
              Book Appointment
            </h2>
            <p className="fontOutfit font-normal text-[16px] text-[#605E5E] mt-1">
              Step 3 of 5
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#605E5E] text-xl hover:text-black"
          >
            <TfiClose />
          </button>
        </div>
        <div className="border-b border-[#E7E4E4] w-full"></div>
        <div className="">
          <label className="block fontOutfit font-medium text-[18px] pl-7 mb-2 p-3">
            Select a Date
          </label>
          <div className="w-118 border mx-auto rounded-lg px-4 py-3">
            <input
              className="w-full fontOutfit font-normal text-[16px] focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>

        <div className=" p-8">
          <label className="block fontOutfit font-medium text-[18px] mb-3">
            Time Slot
          </label>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedTime(slot)}
                className={`rounded-lg border border-[#DDDDDD] p-4 fontOutfit font-normal text-[16px] ${
                  selectedTime === slot
                    ? "border-black bg-gray-100"
                    : "border-gray-200 bg-white"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3 p-5">
          <button
            onClick={() => setStep(2)}
            className="flex-1 py-3.5 w-56.25 border-[#D7D7D7] rounded-lg border text-sm text-gray-600 hover:bg-[#D7D7D7] hover:text-white"
          >
            Back
          </button>
          <button
            onClick={() => {
              if (selectedDate && selectedTime) {
                setStep(4);
              }
            }}
            disabled={!selectedDate || !selectedTime}
            className={`flex-1 py-3.5 w-56.25 rounded-lg text-[14px] font-medium text-white transition-colors
    ${
      selectedDate && selectedTime
        ? "bg-[#28574E] cursor-pointer"
        : "bg-[#D9D9D9] cursor-not-allowed"
    }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
