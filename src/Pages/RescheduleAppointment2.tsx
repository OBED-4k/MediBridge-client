import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
import { Link } from "react-router";
import Carbon from "../assets/Dashboard/carbon_information.svg";

const timeSlots = [
  { time: "10:00 AM", unavailable: false },
  { time: "11:00 AM", unavailable: true },
  { time: "12:00 PM", unavailable: false },
  { time: "1:00 PM", unavailable: true },
  { time: "2:00 PM", unavailable: false },
  { time: "3:00 PM", unavailable: true },
];

export default function RescheduleAppointment2() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-131.75 rounded-lg border border-[#E8E6E6] bg-white shadow-lg">
        <div className="flex items-start p-6 justify-between">
          <div>
            <h2 className="text-[22px] fontOutfit font-semibold">
              Reschedule Appointment
            </h2>
            <p className="fontOutfit font-normal text-[16px] text-[#605E5E] mt-1">
              Select a new date and time for your appointment.
            </p>
          </div>
          <button className="text-[#605E5E] text-xl hover:text-black">
            <TfiClose />
          </button>
        </div>
        <div className="border-b border-[#E7E4E4] w-full"></div>
        <div className="flex gap-3.75 mt-5 mx-auto bg-[#EAF4FF] w-115 h-14 rounded-lg px-2.5 py-2">
          <img className="24" src={Carbon} alt="" />
          <p className="w-118">
            You can only reschedule appointments at least 7 days before the
            scheduled date.
          </p>
        </div>
        <div className="">
          <label className="block fontOutfit font-medium text-[18px] pl-7 mb-2 p-3">
            Select a Date
          </label>
          <div className="w-118 border mx-auto rounded-lg px-4 py-3">
            <input
              className="w-full fontOutfit font-normal text-[16px] focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
              type="date"
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
                key={slot.time}
                onClick={() => !slot.unavailable && setSelected(slot.time)}
                className={`h-15 rounded-lg border flex flex-col items-center justify-center ${
                  slot.time === "2:00PM"
                    ? "border-2 border-[#28574E]"
                    : "border border-gray-200 "
                }${selected === slot.time ? "bg-gray-50" : "bg-white"}`}
              >
                <span className="fontOutfit font-normal text-[16px] leading-none">
                  {slot.time}
                </span>
                {slot.unavailable && (
                  <span className="[13px] text-[#FF383C] mt-2 leading-none">
                    Unavailable
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3 p-5">
          <Link to="//BookAppointmentStep4">
            <button className="flex-1 py-3.5 w-56.25 border-[#D7D7D7] rounded-lg border text-sm text-gray-600 hover:bg-[#D7D7D7] hover:text-white">
              Keep Appointment
            </button>
          </Link>
          <button className="flex-1 py-3.5 w-56.25 cursor-pointer bg-[#28574E] rounded-lg text-[14px] font-medium text-white transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
