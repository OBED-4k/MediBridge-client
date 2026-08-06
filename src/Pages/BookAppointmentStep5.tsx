import { TfiClose } from "react-icons/tfi";
import { IoCheckmark } from "react-icons/io5";
// import ModalAppointmentConfirmed from "../../components/ModalToConfirmAppointment";
// import { useState } from "react";

type Department = {
  id: number;
  name: string;
  doctors: number;
  icon: string;
};

type Doctor = {
  id: number;
  name: string;
  exp: string;
  status: string;
  statusColor: string;
  img: string;
};

type Props = {
  onClose: () => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedDept: Department | null;
  selectedDoctor: Doctor | null;
  selectedDate: string;
  selectedTime: string;
  reason: string;
  onConfirm: () => void;
};

export default function BookAppointmentStep5({
  onClose,
  setStep,
  selectedDept,
  selectedDoctor,
  selectedDate,
  selectedTime,
  reason,
  onConfirm,
}: Props) {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-131.75 rounded-lg border border-[#E8E6E6] bg-white shadow-lg">
        <div className="flex items-start p-6 justify-between">
          <div>
            <h2 className="text-[22px] fontOutfit font-semibold">
              Book Appointment
            </h2>
            <p className="fontOutfit font-normal text-[16px] text-[#605E5E] mt-1">
              Step 5 of 5
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
        <p className="p-7 fontOutfit font-medium text-[18px]">
          Review Your Appointment
        </p>
        <div className="flex gap-4.5 items-center pl-7 pb-5">
          <img
            className="w-17.25 h-12.75 rounded-sm object-cover"
            src={selectedDoctor?.img}
            alt="Doc Image"
          />
          <div className="flex flex-col gap-2.5">
            <p className="fontOutfit font-medium text-[18px] text-[#3E3B3B]">
              {selectedDoctor?.name}
            </p>
            <p className="fontOutfit font-light text-[16px] text-[#605E5E]">
              {selectedDept?.name} Department
            </p>
          </div>
        </div>
        <div className="border-b border-[#E7E4E4] w-121 ml-5"></div>

        <div className="flex flex-col gap-3 p-5">
          <div className="flex justify-between">
            <p className="fontOutfit font-light text-[16px] text-[#757575]">
              Department
            </p>
            <p className="fontOutfit font-normal text-16px text-[#141313]">
              {selectedDept?.name}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="fontOutfit font-light text-[16px] text-[#757575]">
              Date
            </p>
            <p className="fontOutfit font-normal text-16px text-[#141313]">
              {selectedDate}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="fontOutfit font-light text-[16px] text-[#757575]">
              Time
            </p>
            <p className="fontOutfit font-normal text-16px text-[#141313]">
              {selectedTime}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="fontOutfit font-light text-[16px] text-[#757575]">
              Reasons
            </p>
            <p className="fontOutfit font-normal text-16px text-[#141313]">
              {reason}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3.5 p-5">
          <p className="fontOutfit font-medium text-[18px]">Record Sharing</p>
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-sm bg-[#28574E] flex items-center justify-center">
              <IoCheckmark className="text-white text-[20px] font-light" />
            </div>
            <p className="fontOutfit font-medium text-[16px] text-[#494747]">
              Medical history
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-5">
          <button
            onClick={() => setStep(4)}
            className="flex-1 py-3.5 w-56.25 cursor-not-allowed border border-[#D7D7D7] text-[#757575] rounded-lg text-[18px] font-medium fontOutfit transition-colors"
          >
            Back
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-3.5 w-56.25  rounded-lg border text-white text-[18px] bg-[#28574E] font-medium fontOutfit"
          >
            Confirm Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
