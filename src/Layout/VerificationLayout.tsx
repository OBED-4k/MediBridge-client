import React from "react";
import Logo from "../assets/Logo.svg";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
  image: string;
};
export default function AuthLayout({
  children,
  heading,
  subHeading,
  image,
}: Props) {
  return (
    <div className="authBg min-h-screen flex flex-col justify-between">
      {/* Center Content */}
      <div className="flex-1 flex mx-auto items-center justify-center">
        {/* Form */}
        <div className="bg-white w-full max-w-md flex lg:flex-col gap-6 p-10 rounded-xl shadow-lg m-30">
          <div className="flex justify-center">
            <img src={Logo} alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src={image} alt="" />
          </div>
          <div className="flex flex-col gap-1.5 text-center">
            <p className="font-outfit text-[#141313] font-medium text-[28px] leading-[100%] tracking-[0%]">
              {heading}
            </p>
            <div className="flex items-start justify-start ">
              <p className="font-outfit font-light text-[18px] leading-snug tracking-normal text-center whitespace-nowrap">
                {subHeading}
              </p>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
