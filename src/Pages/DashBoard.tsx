import DashBoardLand2 from "../components/DashBoardLand2";
import RaisedHand from "../assets/raisedHand.svg";
import GCalendar from "../assets/GreenCalendar.svg";
import DocImg from "../assets/Dashboard/Docimg.jpg";
import Calendar from "../assets/Dashboard/calendar-days.svg";
import Time from "../assets/Dashboard/clock.svg";
import GAi from "../assets/Chat.svg";
import MedicalR from "../assets/GreenMR.svg";
import AppCon from "../assets/Dashboard/AppCon.svg";
import AppRes from "../assets/Dashboard/AppRes.svg";
import { Link } from "react-router";

export default function DashBoardBody() {
  return (
    <DashBoardLand2>
      <div className="w-244">
        {/* First section */}
        <div className=" flex flex-col p-6 gap-1 h-29 rounded-xl w-244 bg-[#28574E] px-7 ml-5 mt-9.75">
          <div className="flex items-center">
            <p className="fontOutfit font-medium text-[24px] text-white ">
              Hello, Sarah Martins
            </p>
            <img className="w-5 h-6 " src={RaisedHand} alt="" />
          </div>
          <p className="fontDMSans font-light text-[18px] text-[#F0E9E9] ">
            Welcome to MediBridge.
          </p>
        </div>

        {/* Second Section */}
        <div className="flex gap-6 mt-10 mx-7">
          {/* Left Side */}
          <div className="flex flex-col gap-7.25 flex-1">
            <p className="fontOutfit font-medium text-[24px]">
              Upcoming Appointment
            </p>
            <div className="flex flex-col h-65 gap-2.5 p-8 border border-[#D7D7D7] rounded-xl ">
              <div className="flex flex-col items-center h-70 w-120 ">
                <div className="flex items-start w-full gap-5">
                  <img
                    className="w-22 h-24 rounded-[5px] shrink-0"
                    src={DocImg}
                    alt=""
                  />
                  <div className="flex flex-col flex-1 gap-3">
                    {/* Name + Confirmed */}
                    <div className="flex items-start justify-between w-full">
                      <div className="flex flex-col gap-1 ">
                        <p className="fontOutfit font-medium text-[20px]">
                          Dr. Amelia Chen
                        </p>
                        <p className="fontOutfit font-light text-[16px] text-[#605E5E]">
                          Cardiology Department
                        </p>
                      </div>
                      <button
                        className="text-[16px] text-[#28574E] fontOutfit font-medium bg-[#E0F8F3] px-3.5 py-2.5 flex gap-2.5 rounded-[20px] 
                        "
                        type="button"
                      >
                        Confirmed
                      </button>
                    </div>

                    {/* Date + Time */}
                    <div className="flex gap-6">
                      <div className="flex items-center gap-1.5">
                        <img className="w-5.75 h-5.75" src={Calendar} alt="" />
                        <p className="fontOutfit font-normal text-[16px] text-[#605E5E]">
                          Thursday, July2,2026
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <img className="w-5.75 h-5.75" src={Time} alt="" />
                        <p className="fontOutfit font-light text-[16px] text-[#605E5E]">
                          3:00PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Buttons */}
                <div className="w-133 flex gap-4">
                  <Link to="#">
                    <button
                      className="flex flex-col mt-13 w-45 h-13.5 fontOutfit font-medium text-[18px] rounded-lg border border-[#28574E] text-white bg-[#28574E] px-5 py-3.5 gap-3 hover:bg-white hover:text-[#28574E]"
                      type="button"
                    >
                      View Details
                    </button>
                  </Link>
                  <button
                    className="flex flex-col mt-13 w-45 h-13.5 fontOutfit font-medium text-[18px] rounded-lg text-[#28574E] bg-white px-5 py-3.5 gap-3 border border-[#28574E] hover:bg-[#28574E] hover:text-[white] "
                    type="button"
                  >
                    Reschedule
                  </button>
                  <button
                    className="flex flex-col mt-13 w-45 h-13.5 fontOutfit font-medium text-[18px] rounded-lg text-red-600 bg-white px-5 py-3.5 gap-3 hover:bg-red-600 hover:text-white "
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex border border-[#D7D7D7] w-97.75 h-85 rounded-xl p-4 shrink-0">
            <div className="w-full">
              <p className="fontOutfit font-medium text-[24px] mb-4">
                Quick Actions
              </p>
              <div className="flex flex-col gap-4.75">
                <div className="flex w-86.75 items-center gap-3 border border-[#D7D7D7] rounded-lg p-3">
                  <img src={GCalendar} alt="" />
                  <button
                    className="fontOutfit font-normal text-[18px]"
                    type="button"
                  >
                    Book Appointment
                  </button>
                </div>
                <div className="flex items-center gap-3 border border-[#D7D7D7] rounded-lg p-3">
                  <img src={GAi} alt="" />
                  <button
                    className="fontOutfit font-normal text-[18px]"
                    type="button"
                  >
                    Chat With AI
                  </button>
                </div>
                <div className="flex items-center gap-3 border border-[#D7D7D7] rounded-lg p-3">
                  <img src={MedicalR} alt="" />
                  <button
                    className="fontOutfit font-normal text-[18px]"
                    type="button"
                  >
                    Medical Records
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-7 gap-10 pt-7">
        <p className="fontOutfit font-medium text-[24px]">Recent Activities</p>
        {/* Content */}
        <div className="flex flex-row w-230 border border-[#D7D7D7] p-6 gap-1 rounded-xl">
          {/* Appointment confirmed */}
          <div className="flex flex-col gap-5.75">
            {/* First Appointment */}
            <div className="flex gap-85">
              <div className="flex gap-3 items-center">
                <img src={AppCon} alt="" />
                <div className="flex flex-col gap-1 w-100.75">
                  <p className="fontOutfit font-medium text-[20px]">
                    Appointment confirmed
                  </p>
                  <p className="fontOutfit font-light text-[16px] text-[#605E5E]">
                    Cardiology with Dr. Amelia Chen -Thursday, July 2, 2026
                  </p>
                </div>
              </div>
              <p className="fontOutfit font-medium text-16px] text-[#3E3B3B]">
                2hr Ago
              </p>
            </div>
            {/* Second Appointment */}
            <div className="flex gap-85">
              <div className="flex gap-3 items-center">
                <img src={AppRes} alt="" />
                <div className="flex flex-col gap-1 w-100.75">
                  <p className="fontOutfit font-medium text-[20px]">
                    Appointment rescheduled
                  </p>
                  <p className="fontOutfit font-light text-[16px] text-[#605E5E]">
                    Neurology visit moved to August 18, 2026
                  </p>
                </div>
              </div>
              <p className="fontOutfit font-medium text-16px] text-[#3E3B3B]">
                2hr Ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashBoardLand2>
  );
}
