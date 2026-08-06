import React from "react";
import Logo from "../assets/Logo.svg";

type Props = {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
};

export default function ResetPasswordLayout({
  children,
  heading,
  subHeading,
}: Props) {
  return (
    <div className="authBg min-h-screen flex flex-col justify-between">
      <div className="bg-white rounded-xl w-full max-w-md flex flex-col">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <h1>{heading}</h1>
          <p>{subHeading}</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
