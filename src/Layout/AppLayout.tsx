import React from "react";
import Footer from "../components/Footer";
import Header from "../components/NavBar";

type Props = {
  children: React.ReactNode;
  headerProps?: {
    className?: string;
    heading?: string;
    subHeading?: string;
    image?: string;
    others?: React.ReactNode;
  };
};

export default function AppLayout({ children, headerProps }: Props) {
  return (
    <div>
      <Header {...headerProps} />
      <main>{children}</main>

      <Footer />
    </div>
  );
}
