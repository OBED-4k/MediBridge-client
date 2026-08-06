import SideBar from "../components/SideBar";
import { CiSearch } from "react-icons/ci";
import DocImg from "../assets/Dashboard/Doc.svg";
import DocU from "../assets/Dashboard/DocU.svg";
import Button from "../assets/Dashboard/Button.svg";

export default function NoMedicalRecords() {
  return (
    <SideBar>
      <div className="w-full">
        {/* First section */}
        <div className="flex flex-col gap-1.25 mt-6 mb-10">
          <p className="fontOutfit font-semibold text-[24px]">Messages</p>
          <p className="fontOutfit font-light text-[16px] text-[#707070]">
            Conversations with your doctors and care team
          </p>
        </div>
        <div className="border border-[#D7D7D7] rounded-xl flex">
          {/* Side */}
          <div className="border-r border-[#D7D7D7] rounded-bl-xl rounded-tl-xl w-98.25 h-175.5 bg-white ">
            <div className="relative mt-6 mx-5">
              <CiSearch className="w-4.5 h-4.5 absolute left-2.75 top-1/2 -translate-y-1/2 text-[#A0A0A0]" />
              <input
                type="text"
                className="fontISans font-normal text-[14px] border border-[#E7E4E4] px-3 py-2.5 w-88.25 pl-9 rounded-md outline-none focus:border-[#28574E]"
                placeholder="Search departments, condition....."
              />
            </div>
            <div className="relative flex gap-3 mt-5 items-center border border-[#E8FBF7] px-5 py-6 bg-[#E8FBF7] rounded-lg">
              <p className="absolute top-2 right-3 text-[12px] fontOutfit font-light">
                3:00 AM
              </p>
              <img src={DocImg} alt="Dr. Amelia Chen" />
              <div className="flex flex-col w-64">
                <p className="fontOutfit font-medium text-[18px]">
                  Dr. Amelia Chen
                </p>
                <p className="whitespace-nowrap fontOutfit font-light text-[14px]">
                  Good afternoon doctor, I have my appoint...
                </p>
              </div>
            </div>

            <div className="relative flex gap-3 items-center border border-white px-5 py-6  rounded-lg">
              <p className="absolute top-2 right-3 text-[12px] fontOutfit font-light">
                3:00 AM
              </p>
              <img src={DocU} alt="Dr. Amelia Chen" />
              <div className="flex flex-col w-64">
                <p className="fontOutfit font-medium text-[18px]">
                  Dr. Usman Dafodi
                </p>
                <p className="whitespace-nowrap fontOutfit font-light text-[14px]">
                  Good afternoon doctor, I have my appoint...
                </p>
              </div>
            </div>
          </div>
          {/* Right */}
          <div>
            <div className="flex items-center w-147.5 h-17 rounded-tr-xl  px-6 border-b border-[#D7D7D7]">
              <div className="flex gap-3.25 items-center">
                <img src={DocImg} alt="" />
                <p className="fontOutfit font-medium text-[18px]">
                  Dr. Amelia Chen
                </p>
              </div>
            </div>
            <div className="w-116 h-22.75 mt-10 ml-25 bg-[#28574E] px-4 py-3 rounded-tl-xl rounded-br-xl rounded-bl-xl ">
              <p className="fontOutfit font-normal text-[16px] text-white">
                Good afternoon doctor, I have my appointment tomorrow. Is there
                anything I should prepare before coming?
              </p>
              <p className="fontOutfit font-light pt-1 text-[12px] text-white">
                3:00 AM
              </p>
            </div>
            <div className="flex gap-3 mt-10">
              <img className="pb-5 w-14 h-14" src={DocImg} alt="" />
              <div className="bg-[#E8FBF7] w-120 px-4 py-3 flex flex-col rounded-tr-xl rounded-br-xl rounded-bl-xl gap-2.5 ">
                <p className="fontOutfit font-normal text-[16px] text-[#141313]">
                  Good afternoon Sarah. Yes, please avoid food and caffeine for
                  at least 8 hours before your appointment.
                </p>
                <p className="fontOutfit font-light pt-1 text-[12px] text-[#605E5E]">
                  3:00 AM
                </p>
              </div>
            </div>
            <div className="border-t border-[#D7D7D7] rounded-br-xl h-23.75 bg-white mt-66">
              <div className="h-12.5 mx-5 my-5.5 relative">
                <input
                  className="rounded-lg  bg-[#F1FFFD] text-[#6B7280] w-full px-12 py-3.5 border border-[#D7D7D7] h-12.5  outline-none focus:border-[#28574E]"
                  type="text"
                  placeholder="Type your Message..."
                />
                <button type="submit">
                  <img
                    className="absolute top-2.75 right-2"
                    src={Button}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideBar>
  );
}
