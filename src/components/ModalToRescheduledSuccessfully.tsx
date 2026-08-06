import { TfiClose } from "react-icons/tfi";
import Confirm from "../assets/Dashboard/Confirm.svg";

export default function ModalToRescheduledSuccessfully() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col items-center w-118 h-71 rounded-lg border border-[#E8E6E6] bg-white shadow-lg">
        <div className="pl-105 pt-3 w-4.5 h-4.5 rounded-sm">
          <button className="text-[#605E5E] text-xl hover:text-black">
            <TfiClose />
          </button>
        </div>
        <div className="w-12.5 h-12.5">
          <img src={Confirm} alt="" />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center justify-center gap-1.75 pb-3">
            <p className="fontOutfit font-medium text-[18px]">
              Rescheduled Successfully
            </p>
            <p className="fontDMSan font-normal text-[16px] text-center w-100 text-[#737171]">
              Your Appointment with Dr. Amelia Chen is now rescheduled on
              2026-07-30 at 2:00 PM.
            </p>
          </div>
          <div className="flex gap-5.75">
            <button
              className="px-8 py-3.5 border border-[#D7D7D7] rounded-lg fontOutfit font-normal text-[18px]"
              type="button"
            >
              Message Doctor
            </button>
            <button
              className="px-8 py-3.5 bg-[#28574E] text-white border border-[#D7D7D7] rounded-lg fontOutfit font-normal text-[18px]"
              type="button"
            >
              View Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
