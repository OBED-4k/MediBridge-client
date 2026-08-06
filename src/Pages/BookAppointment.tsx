import { IoSearchOutline } from "react-icons/io5";
import Heart from "../assets/Heart.svg";
import Bone from "../assets/Bone.svg";
import Eye from "../assets/Eye.svg";
import OBGYN from "../assets/OB-GYN.svg";
import Baby from "../assets/Baby.svg";
import Head from "../assets/Health.svg";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
import BookAppointmentStep2 from "./BookAppointmentStep2";
import BookAppointmentStep3 from "./BookAppointmentStep3";
import BookAppointmentStep31 from "./BookAppointmentStep31";
import BookAppointmentStep4 from "./BookAppointmentStep4";
import BookAppointmentStep5 from "./BookAppointmentStep5";
import ModalAppointmentConfirmed from "../components/ModalToConfirmAppointment";

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
  onClose?: () => void;
};

const departments: Department[] = [
  {
    id: 1,
    name: "Cardiology",
    doctors: 8,
    icon: Heart,
  },
  {
    id: 2,
    name: "Neurology",
    doctors: 8,
    icon: Head,
  },
  {
    id: 3,
    name: "Ophthalmology",
    doctors: 8,
    icon: Eye,
  },
  {
    id: 4,
    name: "Orthopedics",
    doctors: 8,
    icon: Bone,
  },
  {
    id: 5,
    name: "OB-GYN",
    doctors: 8,
    icon: OBGYN,
  },
  {
    id: 6,
    name: "Pediatrics",
    doctors: 8,
    icon: Baby,
  },
];

export default function BookAppointment({ onClose }: Props) {
  const [step, setStep] = useState(1);
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [reason, setReason] = useState("");
  const [showConfirmed, setShowConfirmed] = useState(false);

  if (showConfirmed) {
    return (
      <ModalAppointmentConfirmed
        onClose={onClose ?? (() => {})}
        selectedDoctor={selectedDoctor}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />
    );
  }

  if (step === 2) {
    return (
      <BookAppointmentStep2
        selectedDept={selectedDept}
        selectedDoctor={selectedDoctor}
        setSelectedDoctor={setSelectedDoctor}
        onClose={onClose ?? (() => {})}
        setStep={setStep}
      />
    );
  }
  if (step === 3) {
    return (
      <BookAppointmentStep3
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        onClose={onClose ?? (() => {})}
        setStep={setStep}
      />
    );
  }

  if (step === 31) {
    return (
      <BookAppointmentStep31
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        onClose={onClose ?? (() => {})}
        setStep={setStep}
      />
    );
  }

  if (step === 4) {
    return (
      <BookAppointmentStep4
        onClose={onClose ?? (() => {})}
        setStep={setStep}
        reason={reason}
        setReason={setReason}
      />
    );
  }

  if (step === 5) {
    return (
      <BookAppointmentStep5
        onClose={onClose ?? (() => {})}
        setStep={setStep}
        selectedDept={selectedDept}
        selectedDoctor={selectedDoctor}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        reason={reason}
        onConfirm={() => setShowConfirmed(true)}
      />
    );
  }

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-131.75 rounded-lg border border-[#E8E6E6] bg-white shadow-lg p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-[22px] fontOutfit font-semibold">
              Book Appointment
            </h2>
            <p className="fontOutfit font-normal text-[#605E5E] mt-1">
              Step 1 of 5
            </p>
          </div>
          <button
            onClick={() => onClose?.()}
            className="text-gray-400 text-xl hover:text-black"
          >
            <TfiClose />
          </button>
        </div>

        <div className="mt-8">
          <h3 className="font-medium fontOutfit text-[18px] mb-3">
            What brings you in today?
          </h3>

          <div className="flex items-center border border-[#E6E3E3] rounded-md px-3 py-3">
            <IoSearchOutline className="text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search symptoms, department or condition..."
              className="ml-2 w-full outline-none focus:border-[#28574E] fontOutfit font-light text-[14px]"
            />
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-medium text-[18px] fontOutfit mb-4">
            Or Select a department
          </h3>

          <div className="grid grid-cols-2 gap-5">
            {departments.map((dept) => (
              <div
                key={dept.id}
                onClick={() => setSelectedDept(dept)}
                className={`rounded-lg p-4 flex items-center gap-4 cursor-pointer transition-all duration-200 ${selectedDept === dept ? "border-2 border-[#28574E]" : "border border-[#DDDDDD] hover:shadow-md"}`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <img src={dept.icon} alt={dept.name} className="w-11 h-11" />
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="font-medium fontOutfit text-[18px]">
                    {dept.name}
                  </h4>
                  <p className="text-[16px] fontOutfit font-light text-[#757575]">
                    {dept.doctors} Doctors
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          disabled={!selectedDept}
          onClick={() => selectedDept && setStep(2)}
          className={`w-full mt-20 py-3 rounded-md fontOutfit font-medium transition-all duration-200
    ${
      selectedDept
        ? "bg-[#28574E] text-white cursor-pointer"
        : "bg-[#D9D9D9] text-white cursor-not-allowed"
    }
  `}
        >
          Next
        </button>
      </div>
    </div>
  );
}
