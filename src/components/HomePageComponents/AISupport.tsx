import { Lock, Brain, SquareCheckBig } from "lucide-react";
import ChatContainer from "../../components/HomePageComponents/ChatContainer";
import { Link } from "react-router";

export default function AISupport() {
  return (
    <div className="mx-auto container flex lg:flex-row md:flex-row flex-col items-center justify-between w-full lg:px-20 px-5 md:px-10 lg:py-25 md:py-25 py-16 text-start">
      <div className="lg:w-1/2 md:w-1/2 sm-text-center md:text-left w-full flex flex-col gap-4">
        <span className="text-[18px] text-[#28574E] bg-[#DCF2EE] rounded-[31px] w-33.5 h-10.75 flex items-center justify-center">
          AI Support
        </span>
        <h1 className="lg:text-[34px] text-3xl md:text-[32px] font-semibold fontLibre lg:leading-10 md:leading-10">
          Ask anything about your health instantly.
        </h1>
        <p className="text-[#757575] lg:text-[20px] md:text-xl text-base sm:max-w-xl lg:w-120.25">
          Get calm, private support from MediBridge AI before you even sign up.
          Talk through symptoms, prepare for a visit, or just think out loud.
        </p>
        <ul className="flex flex-col gap-4 pt-4">
          <li className="flex gap-3 item-start text-[#494949]">
            <span className="text-[#28574E]">
              <Lock />
            </span>
            Anonymous — nothing leaves this device.
          </li>
          <li className="flex gap-3 text-[#494949]">
            <span className="text-[#28574E]">
              <Brain />
            </span>
            Anonymous — nothing leaves this device.
          </li>
          <li className="flex gap-3 text-[#494949]">
            <span className="text-[#28574E]">
              <SquareCheckBig />
            </span>
            Anonymous — nothing leaves this device.
          </li>
        </ul>
        <Link to="/support">
          <button
            type="button"
            className="my-4 w-[215px] text-white bg-[#28574E] cursor-pointer hover:bg-[#4f8379] h-13.5 font-semibold rounded-lg"
          >
            Start Free AI chat
          </button>
        </Link>
      </div>

      <div className="lg:w-1/2 md:w-1/2 w-full md:ml-8">
        <ChatContainer />
      </div>
    </div>
  );
}
