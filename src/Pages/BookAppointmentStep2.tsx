import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
import Doc from "../assets/Dashboard/DocA.jpg";
import DocB from "../assets/Dashboard/DocB.jpg";
// import { Link } from "react-router";
import DoctorProfile from "./DoctorProfile";

type Department = {
  id: number;
  name: string;
  doctors: number;
  icon: string;
};

type Props = {
  selectedDept: Department | null;
  selectedDoctor: Doctor | null;
  setSelectedDoctor: React.Dispatch<React.SetStateAction<Doctor | null>>;
  onClose: () => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type Doctor = {
  id: number;
  name: string;
  exp: string;
  status: string;
  statusColor: string;
  img: string;
};

export default function BookAppointmentStep2({
  selectedDept,
  selectedDoctor,
  setSelectedDoctor,
  onClose,
  setStep,
}: Props) {
  const [showProfile, setShowProfile] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState<
    (typeof doctors)[0] | null
  >(null);
  const doctors = [
    {
      id: 1,
      name: "Dr. Amelia Chen",
      exp: "14 Yrs Exp.",
      status: "Available",
      statusColor: "#10AA37",
      img: Doc,
    },
    {
      id: 2,
      name: "Dr. Blessing Friday",
      exp: "10 Yrs Exp.",
      status: "Unavailable",
      statusColor: "#FF383C",
      img: DocB,
    },
  ];
  if (showProfile) {
    return (
      <DoctorProfile
        selectedDept={selectedDept}
        selectedDoctor={currentDoctor}
        onClose={onClose}
      />
    );
  }
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-131.75 rounded-lg border border-[#E8E6E6] bg-white shadow-lg">
        <div className="flex items-start p-6 justify-between">
          <div>
            <h2 className="text-[22px] fontOutfit font-semibold">
              Book Appointment
            </h2>
            <p className="fontOutfit font-normal text-[#605E5E] mt-1">
              Step 1 of 5
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 text-xl hover:text-black"
          >
            <TfiClose />
          </button>
        </div>
        <div className="border-b border-[#E7E4E4] w-full"></div>

        <div className="flex p-4 justify-between mt-8">
          <p className="font-medium text-[18px] fontOutfit mb-4">
            Select a Doctor
          </p>
          <p className="fontOutfit font-light text-[16px]">
            {selectedDept?.name} • {selectedDept?.doctors} available
          </p>
        </div>
        {/* Containers */}
        <div className="flex flex-col gap-5.25">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              onClick={() => setSelectedDoctor(doctor)}
              className={`w-118.25 mx-auto p-4 rounded-lg cursor-pointer border ${
                selectedDoctor?.id === doctor.id
                  ? "border-[#28574E]"
                  : "border-[#D7D7D7]"
              }`}
            >
              <div className="flex gap-4">
                <img
                  className="w-20 h-20 rounded-sm object-cover"
                  src={doctor.img}
                  alt={doctor.name}
                />

                <div className="flex flex-col">
                  <p className="fontOutfit font-medium text-[20px]">
                    {doctor.name}
                  </p>

                  <p className="fontOutfit font-light text-[16px] text-[#605E5E]">
                    {selectedDept?.name} Department
                  </p>

                  <div className="flex gap-3 mt-2">
                    <p className="fontOutfit text-[14px]">{doctor.exp}</p>

                    <p
                      className="fontOutfit text-[14px]"
                      style={{ color: doctor.statusColor }}
                    >
                      {doctor.status}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => {
                    setCurrentDoctor(doctor);
                    setShowProfile(true);
                  }}
                  type="button"
                  className="w-52 py-3 rounded-lg fontOutfit font-medium text-[16px] hover:bg-[#28574E] hover:text-white"
                >
                  View Profile
                </button>

                <button
                  type="button"
                  className="w-51.75 h-10.5 px-8 fontOutfit font-medium text-[16px] rounded-lg border border-[#28574E] text-[#28574E] hover:bg-[#28574E] hover:text-white"
                >
                  Select Doctor
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-5.75 p-4 mt-30">
          <button
            className="w-56.25 h-13.5 fontOutfit font-normal text-[18px] text-[#757575] flex gap-3 border justify-center items-center border-[#D7D7D7] rounded-lg px-8 py-3.5 cursor-not-allowed"
            type="button"
          >
            Back
          </button>

          <button
            onClick={() => {
              if (selectedDoctor) {
                if (selectedDoctor.status === "Available") {
                  setStep(3);
                } else {
                  setStep(31);
                }
              }
            }}
            className={`w-56.25 h-13.5 fontOutfit font-normal text-[18px] flex gap-3 justify-center items-center rounded-lg px-8 py-3.5 ${
              selectedDoctor
                ? "bg-[#28574E] text-white cursor-pointer"
                : "bg-[#D9D9D9] text-white cursor-not-allowed"
            }`}
            type="button"
            disabled={!selectedDoctor}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
