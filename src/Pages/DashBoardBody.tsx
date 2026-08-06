import DashBoardLand from "../components/DashBoardLand";
import RaisedHand from "../assets/raisedHand.svg";
import ACalendar from "../assets/ACalendar.svg";
import GCalendar from "../assets/GreenCalendar.svg";
import GAi from "../assets/Chat.svg";
import MedicalR from "../assets/GreenMR.svg";
import { useState } from "react";
import BookAppointment from "./BookAppointment";

export default function DashBoardBody() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <DashBoardLand>
      <div className="">
        {/* First section */}
        <div className=" flex flex-col p-6 gap-1 h-29 rounded-xl w-full bg-[#28574E] px-7 mt-9.75">
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
            <div className="flex flex-col h-80 gap-2.5 p-8 border border-[#D7D7D7] rounded-xl ">
              <div className="flex flex-col items-center h-64 ">
                <img
                  className="w-19.25 h-16.25 rounded-[13px] "
                  src={ACalendar}
                  alt=""
                />
                <div className="flex flex-col gap-3">
                  <p className="fontOutfit font-medium text-[20px] text-center">
                    No upcoming appointments
                  </p>
                  <p className="fontOutfit w- font-light text-[16px] text-center">
                    You don't have any scheduled hospital visits yet. Once you
                    book an appointment, it will appear here
                  </p>
                </div>
                <button
                  onClick={() => setOpenModal(true)}
                  className="flex flex-col mt-13 w-48.5 h-13.5 fontOutfit font-medium text-[18px] rounded-lg text-white bg-[#28574E] px-5.5 py-3.5 "
                  type="button"
                >
                  Book Appointment
                </button>
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
      <div className="flex flex-col px-7 gap-10 pt-12">
        <p className="fontOutfit font-medium text-[24px]">Recent Activities</p>
        <div className="flex flex-col gap-3 items-center justify-center">
          <p className="fontOutfit font-medium text-[20px]">
            No recent activity yet
          </p>
          <p className="fontOutfit font-light text-[16px] w-115 text-center text-[#666666] ">
            Your hospital activity will appear here after you book an
            appointment, visit the hospital and receive updates from your care
            team
          </p>
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen py-10">
            <BookAppointment onClose={() => setOpenModal(false)} />
          </div>
        </div>
      )}
    </DashBoardLand>
  );
}
