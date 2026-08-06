import { TfiClose } from "react-icons/tfi";
// import { useState } from "react";
// import { Link } from "react-router";

type Props = {
  onClose: () => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  reason: string;
  setReason: React.Dispatch<React.SetStateAction<string>>;
};

export default function BookAppointmentStep4({
  onClose,
  setStep,
  reason,
  setReason,
}: Props) {
  return (
    <div className="flex items-center justify-center mt-25">
      <div className="w-131.75 rounded-lg border border-[#E8E6E6] bg-white shadow-lg">
        <div className="flex items-start p-6 justify-between">
          <div>
            <h2 className="text-[22px] fontOutfit font-semibold">
              Book Appointment
            </h2>
            <p className="fontOutfit font-normal text-[16px] text-[#605E5E] mt-1">
              Step 4 of 5
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
        <div className="p-7">
          <p className="fontOutfit font-medium text-[18px]">
            Reason for Visit <span className="text-[#E60E0E]">*</span>
          </p>
        </div>
        <input
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="ml-6.5 focus:border-[#D7D7D7] border fontOutfit font-light text-[16px] border-[#D7D7D7] pb-24.75 py-4.5 px-3 rounded-lg w-118 h-32"
          placeholder="Briefly describe your symptoms or reason for this appointment..."
          type="text"
        />

        <div className="flex gap-3 p-7">
          <button
            onClick={() => setStep(3)}
            className="flex-1 py-3.5 w-56.25 cursor-not-allowed border border-[#D7D7D7] text-[#757575] rounded-lg text-[18px] font-medium fontOutfit transition-colors"
          >
            Back
          </button>

          <button
            onClick={() => reason.trim() && setStep(5)}
            disabled={!reason.trim()}
            className={`flex-1 py-3.5 w-56.25  rounded-lg border text-white text-[18px] hover:bg-[#D7D7D7] font-medium fontOutfit ${
              reason.trim()
                ? "bg-[#28574E] cursor-pointer"
                : "bg-[#D7D7D7] cursor-not-allowed "
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
