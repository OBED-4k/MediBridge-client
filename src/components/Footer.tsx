import Logo from "../assets/Logo.svg";
import { Link } from "react-router";

export default function Footer() {
  const links = [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Service", to: "/terms" },
    { label: "Support Center", to: "/support" },
    { label: "Contact", to: "/contact" },
  ];
  return (
    <div className="md:w-full md:h-[13vh] h-[33vh] bg-[#E2DFDF] flex lg:flex-row flex-col lg:py-0 py-3 md:py-10  items-center justify-between lg:px-15 ">
      <img className="block md:hidden px-3" src={Logo} alt="" />
      <div className="mx-auto container flex justify-between lg:px-5 md:px-13 fontOutfit">
        <img
          className="lg:w-[142px] md:w-[140px] lg:h-[29px] md:h-[30px] hidden md:block md:px-0 px-3"
          src={Logo}
          alt=""
        />
        <div className="w-full flex flex-col lg:gap-5 md:gap-5 md:px-4 md:py-0 md:flex-row items-center justify-center">
          {links.map((link, index) => (
            <div key={index} className="w-full md:w-auto">
              <Link
                to={link.to}
                className="block text-center py-2 md:px-0 px-4 md:py-0"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        {/* <div className="flex md:text-nowrap lg:flex-wrap  items-center justify-center lg:px-0 lg:gap-6 md:py-0 py-5 md:gap-6 gap-1 text-center">
          {links.map((link, index) => {
            return (
              <Link key={index} to={link.to}>
                {link.label}
              </Link>
            );
          })}
        </div> */}
      </div>
      <p className="lg:px-2 md:px-2 text-nowrap">
        © 2026 MediBridge Healthcare. Calm & Trusted Care.
      </p>
    </div>
  );
}
