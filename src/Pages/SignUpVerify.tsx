import VerifyLayout from "../Layout/SignUpVerifyLayout";
import image from "../assets/bgLock.svg";
import { Link } from "react-router";
import Input from "../components/Input";

export default function SignUpVerifyPage() {
  return (
    <VerifyLayout
      image={image}
      heading="Securing your healthcare journey."
      subHeading="We use multi-factor authentication to ensure your  medical records and personal data remain private and protected at every step."
    >
      <div className="w-full flex mx-30">
        {/* Left Side */}
        <form className="w-112.5 h-144.75 mx-auto bg-white border border-[#D9D9D9] rounded-xl py-20 px-6 flex flex-col gap-6 shadow-sm">
          <div className="flex flex-col">
            <div className="flex flex-row">
              {/* STEP 1 */}
              <div className="flex gap-2">
                {/* Circle */}
                <div className="w-8 h-8 rounded-full bg-[#28574E] flex items-center justify-center">
                  <p className="text-white text-[14px] font-bold">1</p>
                </div>
                <p className="fontOutfit font-normal pt-2 text-[16px] leading-[100%] tracking-normal text-[#28574E]">
                  Identity
                </p>
              </div>
              {/* Line */}
              <div className="w-[45.5px] mt-4 mx-4 h-0.5 bg-[#28574E]"></div>
              {/* OTP */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#28574E] flex items-center justify-center">
                  <p className="text-white font-medium text-[14px] leading-[100%] tracking-[0%]">
                    2
                  </p>
                </div>
                <p className="text-[#28574E] fontOutfit font-normal text-[16px] leading-[100%] tracking-[0%]">
                  OTP
                </p>
              </div>
              <div className="w-10 h-0.5 mt-4 mx-4 bg-[#E1E3E3]"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E1E3E3] flex items-center justify-center">
                  <p className="text-[#3E3B3B] fontOutfit font-medium text-[14px] leading-[100%] tracking-[0%]">
                    3
                  </p>
                </div>
                <p className="text-[#3E3B3B] fontOutfit font-light text-nowrap lg:text-base leading-none tracking-normal">
                  Set Up
                </p>
              </div>
            </div>
            {/* Form */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="otp"
                className="font-['Outfit'] pt-10 font-medium text-[28px] tracking-[0%] text-[#141313]"
              >
                Verify your account
              </label>
              <p className="font-['Outfit'] font-light text-[18px] leading-[100%] tracking-[0%] text-[#757575]">
                We'll send a 6-digit verification code to your email to verify
                your account.
              </p>
              <div className=" flex gap-5.5 p-5">
                {Array.from({ length: 6 }, (_, index) => {
                  return (
                    <Input
                      key={index}
                      type="text"
                      id={`otp- ${index}`}
                      inputMode="numeric"
                      pattern="\d"
                      maxLength={1}
                      className="flex items-center justify-center text-center border-[1.5px] border-[#D9D9D9] w-11 h-11 text-[18px] font-semibold outline-none focus:border-[#28574E] focus:ring-1 focus:ring-[#28574E]"
                    />
                  );
                })}
              </div>
              <p className="flex items-center justify-center text-[#605D5D] font-['Outfit'] font-normal text-[14px] leading-[100%] tracking-[0%]">
                Code expires in 5:00
              </p>

              <div className="flex flex-col justify-between items-center pt-8">
                <Link to="/SetUpPassword" className="w-full">
                  <button
                    className="w-full h-13 rounded-lg my-6 text-[#707070] hover:text-white hover:bg-[#28574E] flex items-center justify-center gap-2.5 fontOutfit font-normal text-[18px] leading-[100%] cursor-pointer bg-[#F8F7F7]"
                    type="submit"
                  >
                    Verify Code
                  </button>
                </Link>
                <div className="flex gap-2">
                  <p className="gap-1 font-['Outfit'] font-normal text-[14px] leading-[100%] tracking-[0%] text-[#3F484A] text-center flex items-center justify-center">
                    Didn't receive the code?
                    <Link to="/SignUpVerify">
                      <span className="text-[#28574E] fontOutfit text-[14px] font-normal leading-[100%] tracking-normal text-center flex items-center justify-center">
                        Resend code
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* Footer */}
      </div>
    </VerifyLayout>
  );
}
