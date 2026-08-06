import Footer from "../components/Footer";
import AiHero from "../components/AiHero";
import Face from "../assets/Face.svg";
import Button from "../assets/Button.svg";
import Container from "../assets/ContainerIcon.svg";

// const options = [
//   "I don't feel well",
//   "Medication information",
//   "Appointment help",
//   "Understand my lab results",
// ];

export default function AiSupportPage() {
  return (
    <div className="bg-[#F9FAFB]">
      <div>
        <AiHero />
      </div>
      <div className="flex flex-col items-center justify-center m-40">
        <div className="flex flex-col w-293 gap-4.5 items-center justify-center">
          <div className="w-33.5">
            <p className="flex items-center justify-center rounded-4xl fontOutfit font-normal text-[18px] px-6 py-2.5 bg-[#DCF2EE]">
              AI Support
            </p>
          </div>

          <h1 className="fontLibre font-semibold text-[34px]">
            How can I help today?
          </h1>
          <p className="fontOutfit font-light w-119 text-center text-[20px] text-[#757575]">
            No login required. Conversations are private and not stored to your
            record.
          </p>
        </div>
        <div className="flex flex-col border border-[#DDDDDD] gap-19 w-180 h-144.75">
          <div className="flex w-180 h-80.5 p-6 ">
            <div className="flex gap-3">
              <img className="w-8 h-8" src={Face} alt="" />
              <p className="fontOutfit font-normal rounded-tr-xl rounded-br-xl rounded-bl-xl text-[16px] w-152.75 h-18.5 border border-[#DCF2EE] p-4 bg-[#DCF2EE]">
                Hi 👋 I'm MediBridge AI. I can help with medication questions,
                appointment prep, and general health information. What's on your
                mind today?
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-6 border border-white w-179.5 h-45.25 bg-white">
            <div className="flex gap-3 mx-8">
              <p className="w-30 px-2 text-nowrap pt-2 rounded-xl border border-[#DDDDDD] text-[14px] fontOutfit text-center">
                I don't feel well
              </p>

              <p className="w-42 pt-2 text-nowrap px-2 rounded-xl border border-[#DDDDDD] text-[12px] fontOutfit text-center">
                Medication information
              </p>

              <p className="flex-1 text-nowrap px-3 py-1.5 pt-2 rounded-xl border border-[#DDDDDD] text-[14px] fontOutfit text-center">
                Appointment help
              </p>

              <p className="w-47 text-nowrap px-3 py-1.5 pt-2 rounded-xl border border-[#DDDDDD] text-[14px] fontOutfit text-center">
                Understand my lab results
              </p>
            </div>
            {/* <div className="flex gap-3 mx-8">
              {options.map((item) => (
                <button
                  key={item}
                  className="flex-1 h-12 rounded-xl border border-[#DDDDDD] text-[14px] fontOutfit text-center"
                >
                  {item}
                </button>
              ))}
            </div> */}
            <div className="flex relative">
              <input
                className="w-163.5 h-12.5 bg-[#F1FFFD] rounded-lg border border-[#C2C6D4] px-12 py-3.5 "
                type="text"
                name=""
                id=""
                placeholder="Type anything..."
              />
              <img
                className="w-8 h-8 absolute top-1/6 right-3 "
                src={Button}
                alt=""
              />
            </div>
            <div className="flex mx-auto">
              <img className="w-[11.67px] h-[11.67] " src={Container} alt="" />
              <p className="flex items-center justify-center fontOutfit font-normal text-[14px] w-143.25 ">
                This AI provides informational guidance and does not replace
                professional medical diagnosis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
