import React from "react";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

export default function LandingLayout({ children }: Props) {
  return (
    <div className="bg-[#F5F5F5] w-full mx-auto ">
      <div className="flex flex-col">{children}</div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
