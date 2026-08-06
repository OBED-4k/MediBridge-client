import SideBard from "../components/SideBar";
import { Link } from "react-router";
import ACalendar from "../assets/ACalendar.svg";

export default function Appointment() {
  return (
    <SideBard>
      <div className="w-full">
        {/* First section */}
        <div className="flex w-full items-center mb-10 justify-between">
          <div>
            <p className="fontOutfit font-semibold text-[24px]">Appointments</p>
            <p className="fontOutfit font-light text-[16px] text-[#707070]">
              Manage your visits and continue your care.
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
        <div className="w-150 border rounded-lg p-3.5 flex gap-4 border-[#E7E4E4] bg-white">
          <div className="flex gap-3 w-full">
            <Link to="/Appointment">
              <button
                className="px-8 flex-1 fontOutfit font-normal text-[16px] hover:bg-[#28574E] hover:text-white text-nowrap py-3 rounded-lg flex gap-2.5 bg-[#F7F4F4] text-[#605E5E]"
                type="button"
              >
                Upcoming (1)
              </button>
            </Link>
            <Link to="/Appointment_2">
              <button
                className="flex fontOutfit text-[#605E5E] font-normal items-center justify-center gap-2.5 py-3 px-13 hover:bg-[#28574E] hover:text-white flex-1 text-nowrap rounded-lg bg-[#F7F4F4] text-[16px]"
                type="button"
              >
                Completed (1)
              </button>
            </Link>
            <button
              className="fontOutfit font-medium  text-white gap-2.5 py-3 px-8 flex-1 text-nowrap rounded-lg bg-[#28574E] text-[16px]"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-7.5 mt-40 items-center justify-center">
          <img src={ACalendar} alt="" />
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="fontOutfit font-medium text-[20px]">
              No cancelled appointments
            </p>
            <p className="fontOutfit font-light text-[16px] ">
              Any cancelled appointments will show here
            </p>
          </div>
        </div>
      </div>
    </SideBard>
  );
}
