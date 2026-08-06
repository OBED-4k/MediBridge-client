import { TfiClose } from "react-icons/tfi";
import Doc from "../assets/Dashboard/DocA.jpg";
import { Link } from "react-router";

export default function ConfirmRescheduleAppointment() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-131.75 rounded-lg border border-[#E8E6E6] bg-white shadow-lg">
        <div className="flex items-start p-6 justify-between">
          <div className="flex flex-col gap-2.25">
            <p className="text-[22px] fontOutfit font-semibold">
              Reschedule Appointment
            </p>
            <p className="fontOutfit font-light text-[16px] text-[#605E5E]">
              Review appointment new date and time
            </p>
          </div>
          <button className="text-[#605E5E] text-xl hover:text-black">
            <TfiClose />
          </button>
        </div>
        <div className="border-b border-[#E7E4E4] w-full"></div>
        <div className="flex gap-4.5 items-center pl-7 pb-5 pt-5">
          <img
            className="w-17.25 h-12.75 rounded-sm object-cover"
            src={Doc}
            alt="Doc Image"
          />
          <div className="flex flex-col gap-2.5">
            <p className="fontOutfit font-medium text-[18px] text-[#3E3B3B]">
              Dr. Amelia Chen
            </p>
            <p className="fontOutfit font-light text-[16px] text-[#605E5E]">
              Cardiology Department
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
              Cardiology
            </p>
          </div>
          <div className="flex justify-between">
            <p className="fontOutfit font-light text-[16px] text-[#757575]">
              Date
            </p>
            <p className="fontOutfit font-normal text-16px text-[#141313]">
              Wednesday, July 20
            </p>
          </div>
          <div className="flex justify-between">
            <p className="fontOutfit font-light text-[16px] text-[#757575]">
              Time
            </p>
            <p className="fontOutfit font-normal text-16px text-[#141313]">
              2:00 PM
            </p>
          </div>
          <div className="flex justify-between">
            <p className="fontOutfit font-light text-[16px] text-[#757575]">
              Reasons
            </p>
            <p className="fontOutfit font-normal text-16px text-[#141313]">
              Chest Pain
            </p>
          </div>
        </div>
        <div className="flex gap-3 p-5">
          <Link to="/BookAppointmentStep4">
            <button className="flex-1 py-3.5 w-56.25 cursor-not-allowed border border-[#D7D7D7] text-[#757575] rounded-lg text-[18px] font-medium fontOutfit transition-colors">
              Keep Appointment
            </button>
          </Link>
          <Link to="">
            <button className="flex-1 py-3.5 w-56.25  rounded-lg border text-white text-[18px] bg-[#28574E] font-medium fontOutfit">
              Confirm Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
