import SideBar from "../components/SideBar";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
import Medical from "../assets/Dashboard/NoMR.svg";
import ArrowDown from "../assets/ArrowDown.svg";

export default function NoMedicalRecords() {
  return (
    <SideBar>
      <div className="w-full">
        {/* First section */}
        <div className="flex w-full items-center mb-10 justify-between mt-6">
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
        <div className="flex flex-col items-center gap-7.5 mt-35">
          <img className="w-19.25 h-12" src={Medical} alt="" />
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="fontOutfit font-medium text-[20px] ">
              No Medical Records Yet
            </p>
            <p className="fontOutfit font-light text-[16px] text-[#666666]">
              You don’t have any clinical records available.
            </p>
          </div>
        </div>
      </div>
    </SideBar>
  );
}
