import SideBard from "../components/SideBar";
// import GCalendar from "../../assets/GreenCalendar.svg";
import DocImg from "../assets/Dashboard/Docimg.jpg";
import Calendar from "../assets/Dashboard/calendar-days.svg";
import Time from "../assets/Dashboard/clock.svg";
import { Link } from "react-router";

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
              className="fontOutfit font-medium text-[18px] border bg-[#28574E] hover:bg-white hover:text-[#28574E] text-white rounded-lg px-3.5 py-4
            "
            >
              Book New Appointment
            </button>
          </Link>
        </div>
        <div className="w-130 border rounded-lg p-4 flex gap-4 border-[#E7E4E4] bg-white">
          <div className="flex gap-3">
            <button
              className="px-8 flex-1 fontOutfit font-normal text-[16px] hover:bg-white hover:text-[#28574E] text-nowrap py-3 rounded-lg flex gap-2.5 bg-[#28574E] text-white"
              type="button"
            >
              Upcoming (1)
            </button>

            <Link to="/Appointment_2">
              <button
                className="flex fontOutfit font-medium text-[#605E5E] gap-2.5 py-3 px-8 flex-1 text-nowrap rounded-lg hover:bg-[#28574E] hover:text-white bg-[#F7F4F4] text-[16px]"
                type="button"
              >
                Completed (1)
              </button>
            </Link>
            <Link to="/AppointmentPage_Cancel">
              <button
                className="fontOutfit font-normal items-center justify-center flex gap-2.5 py-3 px-13 hover:bg-[#28574E] hover:text-white flex-1 text-nowrap rounded-lg bg-[#F7F4F4] text-[16px] text-[#605E5E]"
                type="button"
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>

        {/* Second Section */}
        <div className="w-full mt-10 rounded-xl p-4 flex justify-between border border-[#D7D7D7]">
          {/* Left side */}
          <div className="flex gap-6 items-center">
            <img
              className="w-21.75 h-21 object-cover rounded-[5px]"
              src={DocImg}
              alt=""
            />

            <div>
              <p className="font-medium text-[20px]">Dr. Amelia Chen</p>
              <p className="text-[16px] text-[#605E5E]">
                Cardiology Department
              </p>

              <div className="flex items-center gap-6 mt-2">
                <div className="flex items-center gap-2">
                  <img src={Calendar} alt="" />
                  <p>Thursday, July 2, 2026</p>
                </div>

                <div className="flex items-center gap-2">
                  <img src={Time} alt="" />
                  <p>3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-end gap-6">
            {/* Confirm badge */}
            <span className="text-[16px] text-[#28574E] font-medium bg-[#E0F8F3] px-3.5 py-2.5 rounded-[20px]">
              Confirmed
            </span>

            {/* Buttons row */}
            <div className="flex items-center gap-4">
              <button className="fontOutfit font-medium text-[18px] bg-[#28574E] text-white px-4 py-2.5 rounded-lg border border-[#28574E] hover:bg-white hover:text-[#28574E]">
                View Details
              </button>

              <button className="fontOutfit font-medium text-[18px] text-[#28574E] px-4 py-2.5 rounded-lg border border-[#28574E] hover:bg-[#28574E] hover:text-[white]">
                Reschedule
              </button>

              <div className="flex gap-2">
                <button className="fontOutfit font-medium text-[18px] px-5 py-2.5 border border-[#E7E4E4] hover:bg-[#E7E4E4] hover:text-[white] rounded-lg">
                  Message
                </button>

                <button className="text-red-600 px-6 py-2.5 rounded-lg hover:bg-red-700 hover:text-white">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideBard>
  );
}
