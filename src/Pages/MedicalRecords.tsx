import SideBar from "../components/SideBar";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
import ArrowDown from "../assets/ArrowDown.svg";
import CalendarDays from "../assets/Dashboard/calendar-days.svg";
import Calendar from "../assets/Dashboard/Calendar.svg";
import { LuDownload } from "react-icons/lu";

export default function MedicalRecords() {
  return (
    <SideBar>
      <div className="w-full">
        {/* First section */}
        <div className="flex w-full items-center mb-10 justify-between">
          <div>
            <p className="fontOutfit font-semibold text-[24px]">
              Medical Records
            </p>
            <p className="fontOutfit font-light text-[16px] text-[#707070]">
              Your complete history of hospital visits and consultation
              summaries.
            </p>
          </div>
          <Link to="/BookNewAppointment">
            <button
              type="button"
              className="fontOutfit font-medium text-[18px] hover:bg-white hover:text-[#28574E] border bg-[#28574E] text-white rounded-lg px-3.5 py-4
            "
            >
              Book New Appointment
            </button>
          </Link>
        </div>
        <div className="w-full bg-white border border-[#E6E3E3] rounded-lg gap-2.5 ">
          <div className="flex gap-10 py-4 mb-1.5">
            {/* Search Bar */}
            <div className="flex flex-col gap-1">
              <p className="pl-8 fontOutfit font-medium text-[#494747] text-[16px] ">
                Search
              </p>
              <div className="relative pl-8">
                <CiSearch className="w-4.5 h-4.5 absolute left-11 top-1/2 -translate-y-1/2 text-[#A0A0A0]" />
                <input
                  className="border border-[#E7E4E4] w-162 pl-9 pr-3 py-2.5 rounded-md  outline-none focus:border-[#28574E]"
                  type="text"
                  placeholder="Search departments, condition....."
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="fontDMSan font-medium text-[16px] text-[#494747] ">
                Filter
              </p>
              <div className="flex items-center justify-between gap-6 border border-[#E6E3E3] w-57.25 h-11 px-3 rounded-md">
                <p className="fontDMSan font-normal text-[14px] text-[#363636] ">
                  All
                </p>
                <img className="w-3.75 h-[7.44px] " src={ArrowDown} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full mt-10 rounded-xl p-4 flex justify-between border border-[#D7D7D7]">
            <div className="flex gap-6">
              <img
                className="w-12.5 h-12.5 rounded-[5px]"
                src={Calendar}
                alt=""
              />

              <div>
                <p className="font-medium text-[20px]">
                  Cardiology Consultation Notes
                </p>
                <p className="text-[16px] text-[#605E5E]">
                  Dr. Amelia Chen · Cardiology Department
                </p>

                <div className="flex items-center gap-6 mt-2">
                  <div className="flex items-center gap-2">
                    <img className="w-5.75 h-5.75" src={CalendarDays} alt="" />
                    <p>Thursday, July 2, 2026</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 items-end gap-6">
              {/* Buttons row */}
              <div className="flex items-center gap-4">
                <button className="fontOutfit font-medium text-[18px] bg-[#28574E] text-white px-11 py-3.5 rounded-lg border border-[#28574E] hover:bg-white hover:text-[#28574E]">
                  View
                </button>
                <button className="flex items-center justify-center gap-3 fontOutfit font-medium text-[18px] text-[#28574E] px-8 py-3.5 rounded-lg border border-[#28574E] hover:bg-[#28574E] hover:text-white transition">
                  <LuDownload className="w-6 h-6" />
                  <span>PDF</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 rounded-xl p-4 flex justify-between border border-[#D7D7D7]">
            <div className="flex gap-6">
              <img
                className="w-12.5 h-12.5 rounded-[5px]"
                src={Calendar}
                alt=""
              />
              <div>
                <p className="font-medium text-[20px]">
                  Neurology Consultation Notes
                </p>
                <p className="text-[16px] text-[#605E5E]">
                  Dr. Emily Carter · Neurology Department
                </p>

                <div className="flex items-center gap-6 mt-2">
                  <div className="flex items-center gap-2">
                    <img className="w-5.75 h-5.75" src={CalendarDays} alt="" />
                    <p>Thursday, July 2, 2026</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 items-end gap-6">
              {/* Buttons row */}
              <div className="flex items-center gap-4">
                <button className="fontOutfit font-medium text-[18px] bg-[#28574E] text-white px-11 py-3.5 rounded-lg border border-[#28574E] hover:bg-white hover:text-[#28574E]">
                  View
                </button>
                <button className="flex items-center justify-center gap-3 fontOutfit font-medium text-[18px] text-[#28574E] px-8 py-3.5 rounded-lg border border-[#28574E] hover:bg-[#28574E] hover:text-white transition">
                  <LuDownload className="w-6 h-6" />
                  <span>PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideBar>
  );
}
