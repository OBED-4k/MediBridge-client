import { TfiClose } from "react-icons/tfi";

type Props = {
  selectedDept: {
    id: number;
    name: string;
    doctors: number;
    icon: string;
  } | null;
  selectedDoctor: {
    id: number;
    name: string;
    exp: string;
    status: string;
    statusColor: string;
    img: string;
  } | null;
  onClose: () => void;
};

export default function DoctorProfile({
  selectedDept,
  selectedDoctor,
  onClose,
}: Props) {
  console.log(selectedDoctor);
  return (
    <div className="flex items-center justify-center flex-col mt-10 bg-white">
      <div className="border border-[#E8E6E6] rounded-md w-103.25 h-116">
        <div className="flex gap-52 p-6 mb-3">
          <p className="text-nowrap fontOutfit font-semibold text-[22px]">
            Doctor Profile
          </p>
          <button
            onClick={onClose}
            className="text-gray-400 text-xl hover:text-black"
          >
            <TfiClose />
          </button>
        </div>
        <div className="border-b border-[#E7E4E4] w-full"></div>
        <div className="flex flex-col gap-4.75">
          <div className="flex flex-col gap-5 mt-2 p-6">
            <div className="flex gap-4.5">
              <img
                className="w-20 h-20 rounded-sm"
                src={selectedDoctor?.img}
                alt=""
              />
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-col gap-2">
                  <p className="fontOutfit font-medium text-[20px]">
                    {selectedDoctor?.name}
                  </p>
                  <p className="fontOutfit font-light text-[16px]">
                    {selectedDept?.name} Department
                  </p>
                </div>
                <div className="flex gap-3.25">
                  <p className="fontOutfit font-normal text-[14px] text-[#3E3B3B]">
                    {selectedDoctor?.exp}
                  </p>
                  <p
                    className="fontOutfit font-normal text-[14px]"
                    style={{ color: selectedDoctor?.statusColor }}
                  >
                    {selectedDoctor?.status}
                  </p>
                </div>
              </div>
            </div>
            <p className="w-93.5 fontOutfit font-light text-[16px] text-[#3E3B3B]">
              Dr. Chen is a board-certified cardiologist with over 14 years of
              experience in interventional cardiology. He specializes in complex
              coronary interventions and heart failure
            </p>
            <div className="flex flex-col gap-2">
              <p className="fontOutfit font-medium text-[17px]">Availability</p>
              <div className="flex flex-col gap-2">
                <p className="fontOutfit font-light text-[16px] text-[#3E3B3B]">
                  Monday - Wednesday
                </p>
                <p className="fontOutfit font-light text-[16px] text-[#3E3B3B]">
                  10:00 AM – 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
