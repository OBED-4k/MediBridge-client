import { TfiClose } from "react-icons/tfi";
import HeartPluse from "../assets/HeartPluse.svg";
import HeartImg from "../assets/HeartImg.svg";

export default function ViewDepartment() {
  return (
    <div className="flex flex-col rounded-lg border border-[#28574E] w-120 h-236.5 mx-auto m-10">
      <div className="flex gap-54 p-7">
        <div className="flex gap-3">
          <img
            className="w-7.5 h-[27.52px] "
            src={HeartPluse}
            alt="HeartPluse"
          />
          <h1 className="fontLibre font-semibold text-[32px] text-[#28574E] leading-none tracking-normal">
            Cardiology
          </h1>
        </div>
        <div className=" w-4.5 h-4.5 ">
          <TfiClose />
        </div>
      </div>
      <div className="w-[480.03px] h-0 border border-[#E7E4E4]"></div>
      <div className="rounded-[15px] mx-auto mt-5 mb-5">
        <img className="w-105.75 h-54.25 " src={HeartImg} alt="HeartImg" />
      </div>
      <div className="flex flex-col gap-2 ml-7">
        <h1 className="fontOutfit font-medium text-[20px] text-[#28574E] leading-none tracking-normal">
          Department Overview
        </h1>
        <p className="fontOutfit mb-5 font-light text-[#3F484A] text-[18px] leading-6 tracking-normal w-107.25">
          The Cardiology department specializes in diagnosing <br /> and
          treating conditions related to <br /> the heart and cardiovascular
          system, providing <br />
          expert care for hypertension, <br /> arrhythmias, and coronary
          diseases. Our multidisciplinary approach ensures that patients receive
          comprehensive care from initial diagnosis through long-term management
          and <br /> rehabilitation.
        </p>
      </div>

      <div className="flex flex-col ml-7 gap-4.5">
        <h1 className="fontOutfit font-medium text-[20px] text-[#28574E] ">
          Service Offered
        </h1>
        <div className="flex gap-12.5">
          <div className="flex gap-3">
            <input
              className="w-6 h-6 border border-[#28574E] accent-[#28574E]"
              type="checkbox"
              name=""
              id=""
            />
            <p className="fontOutfit font-normal text-[18px] ">
              ECG (Heart test)
            </p>
          </div>
          <div className="flex gap-3">
            <input
              className="w-6 h-6 border border-[#28574E] accent-[#28574E]"
              type="checkbox"
              name=""
              id=""
            />
            <p className="fontOutfit font-normal text-[18px]">
              Heart screening
            </p>
          </div>
        </div>

        <div className="flex gap-10.75">
          <div className="flex gap-3">
            <input
              className="w-6 h-6 border border-[#28574E] accent-[#28574E]"
              type="checkbox"
              name=""
              id=""
            />
            <p className="fontOutfit font-normal text-[18px]">
              Heart monitoring
            </p>
          </div>
          <div className="flex gap-3">
            <input
              className="w-6 h-6 border border-[#28574E] accent-[#28574E]"
              type="checkbox"
              name=""
              id=""
            />
            <p className="fontOutfit font-normal text-[18px]">Blood Pressure</p>
          </div>
        </div>
        <div className="flex gap-3">
          <input
            className="w-6 h-6 border border-[#28574E] accent-[#28574E]"
            type="checkbox"
            name=""
            id=""
          />
          <p className="fontOutfit font-normal text-[18px]">
            Cardiac Consultation
          </p>
        </div>
      </div>
      <div className="flex gap-5.5 ml-7 mt-20">
        <button
          className="border border-[#4D5461] text-[18px] fontDMSans text-[#4D5461] font-medium  px-6 py-3 items-center w-45.25 rounded-lg hover:border-[#28574E] hover:bg-[#28574E] hover:text-[white] "
          type="button"
        >
          Cancel
        </button>
        <button
          className="bg-[#28574E] text-white w-54 rounded-lg hover:bg-white hover:text-[#28574E]"
          type="button"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
