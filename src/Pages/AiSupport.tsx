import SideBar from "../components/SideBar";
import Face from "../assets/Face.svg";
import Button from "../assets/Dashboard/Button.svg";
import Container from "../assets/ContainerIcon.svg";

export default function NoMedicalRecords() {
  return (
    <SideBar>
      <div className="w-full">
        {/* First section */}
        <div className="flex flex-col gap-1.25 mt-6 mb-10">
          <p className="fontOutfit font-semibold text-[24px]">AI Support</p>
          <p className="fontOutfit font-light text-[16px] text-[#707070]">
            Describe your symptoms or ask any hospital-related question. The AI
            will guide you step-by-step.
          </p>
        </div>
        <div className="w-full h-191.75 rounded-xl border border-[#D7D7D7]">
          {/* Top */}
          <div className="flex gap-170 py-4 w-full border-b border-[#D7D7D7]">
            <div className="flex pl-5 w-39.5 items-center gap-3.25">
              <img className="w-8 h-8" src={Face} alt="" />
              <p className="text-nowrap fontOutfit font-medium text-[18px]">
                MediBridge AI
              </p>
            </div>
            <button
              className="rounded-lg bg-[#28574E] fontOutfit font-medium text-[16px] text-white px-4.5 py-2.5"
              type="button"
            >
              New Chat
            </button>
          </div>
          <div className="flex gap-3 mt-10 ml-6">
            <img className="w-8 h-8" src={Face} alt="" />
            <div className="w-155 h-18.5 p-4 border border-[#C2C6D4] rounded-tr-xl rounded-br-xl rounded-bl-xl bg-[#DCF2EE]">
              <p className="fontOutfit font-normal text-[16px]">
                Hi 👋 I'm MediBridge AI. I can help with medication questions,
                appointment prep, and general health information. What's on your
                mind today?
              </p>
            </div>
          </div>
          <div className="p-4 w-72 h-13.5 my-10 ml-162 rounded-tl-xl rounded-br-xl rounded-bl-xl border bg-[#28574E]">
            <p className="fontOutfit font-normal text-[16px] text-white">
              I don't feel well — can you help?
            </p>
          </div>
          <div className="flex flex-col border-t border-[#C2C6D4] h-50 mt-70">
            <div className="flex gap-4 mt-7 ml-6">
              <p className="border border-[#DDDDDD] rounded-lg px-3 py-1.5 fontOutfit font-normal text-[14px]">
                i don't fell well
              </p>
              <p className="border border-[#DDDDDD] rounded-lg px-3 py-1.5 fontOutfit font-medium text-[16px]">
                Medication information
              </p>
              <p className="border border-[#DDDDDD] rounded-lg px-3 py-1.5 fontOutfit font-normal text-[14px]">
                Appointment help
              </p>
              <p className="border border-[#DDDDDD] rounded-lg px-3 py-1.5 fontOutfit font-normal text-[14px]">
                Understand my lab results
              </p>
            </div>
            <div className="h-12.5 mx-5 my-5.5 mt-6 relative">
              <input
                className="rounded-lg  bg-[#F1FFFD] text-[#6B7280] w-full px-5 py-3.5 border border-[#D7D7D7] h-12.5  outline-none focus:border-[#28574E]"
                type="text"
                placeholder="Type your question..."
              />
              <button type="submit">
                <img
                  className="absolute top-2.75 right-2"
                  src={Button}
                  alt=""
                />
              </button>
            </div>
            <div className="flex items-center justify-center text-[#757575]">
              <img className="text-[#757575]" src={Container} alt="" />
              <p className="fontOutfit font-normal text-[14px]">
                This AI provides informational guidance and does not replace
                professional medical diagnosis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SideBar>
  );
}
