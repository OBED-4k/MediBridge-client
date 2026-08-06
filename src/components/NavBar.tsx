import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import React from "react";
import Logo from "../assets/Logo.svg";
import { NavLink, Link } from "react-router";
import Button from "./Button";
import { useAuth } from "../Hooks/Auth/useAuth";

type Props = {
  className?: string;
  heading?: string;
  subHeading?: string;
  image?: string;
  others?: React.ReactNode;
};

const navLinks = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/departments",
    label: "Departments",
  },
  {
    to: "/support",
    label: "AI Support",
  },
  {
    to: "/about",
    label: "AboutUs",
  },
];

export default function Header({
  className,
  heading,
  subHeading,
  others,
  image,
}: Props) {
  const { isAuthenticated } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${className} relative px-4 lg:px-20 py-5 w-full`}>
      <div className="mx-auto container">
        <nav className="lg:fixed md:fixed fixed top-4 lg:left-1/2 md:left-1/2 left-1/30 lg:-translate-x-1/2 md:-translate-x-1/2 lg:w-[95%] md:w-[95%] w-[94%] bg-white/90 backdrop-blur-md lg:bg-white md:bg-white rounded-full flex justify-between items-center px-6 md:px-10 h-20 shadow-lg z-50">
          <Link to="/">
            <img className="md:px-3" src={Logo} alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-4 md:text-nowrap gap-5 items-center fontOutfit">
            {navLinks.map(({ to, label }) => {
              return (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[18px] text-[#28574E] font-semibold"
                      : "text-[18px]"
                  }
                >
                  <p className="text-[18px]">{label}</p>
                </NavLink>
              );
            })}
          </div>

          {/* Desktop button */}
          <div className="hidden md:flex">
            {isAuthenticated ? (
              <Link to="/patientDashboard">
                <Button
                  className="px-4 fontOutfit"
                  type="button"
                  content="Go to dashboard"
                />
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <button
                    type="button"
                    className="text-[#28574E] md:pl-3 text-[18px] fontOutfit border-0 h-13 font-semibold"
                  >
                    Login
                  </button>
                </Link>
                <Link to="/activate">
                  <Button
                    className="lg:px-4 md:px-2 fontOutfit"
                    type="button"
                    content="Activate Account"
                  />
                </Link>
              </div>
            )}
          </div>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#28574E]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[94%] z-40 bg-white rounded-2xl mt-4 shadow-lg py-5 px-6">
            <div className="flex flex-col gap-4">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#28574E] font-semibold text-lg"
                      : "text-lg"
                  }
                >
                  {label}
                </NavLink>
              ))}

              <hr />

              {isAuthenticated ? (
                <Link to="/patientDashboard" onClick={() => setMenuOpen(false)}>
                  <Button
                    className="w-full"
                    type="button"
                    content="Go to dashboard"
                  />
                </Link>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link to="/login" onClick={() => setMenuOpen(false)}>
                    <button className="w-full border border-[#28574E] rounded-lg py-3 text-[#28574E] font-semibold">
                      Login
                    </button>
                  </Link>

                  <Link to="/activate" onClick={() => setMenuOpen(false)}>
                    <Button
                      className="w-full"
                      type="button"
                      content="Activate Account"
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center lg:px-0 md:px-0 px-2 lg:py-50 md:py-20 lg:w-195 md:w-195 mx-auto text-center gap-3">
          <h1 className="lg:text-[58px] md:text-[58px] text-4xl text-white pt-25 font-extrabold fontLibre lg:leading-[100%] md:leading-[100%] leading-tight">
            {heading}
          </h1>
          <p className="lg:text-[20px] md:text-[20px] text-base text-[#DAD8D8] font-light lg:w-160 md:w-160 w-95 text-center fontOutfit">
            {subHeading}
          </p>
          <div className="flex gap-5 pt-5 z-10">{others}</div>
        </div>
      </div>
      <img
        className="lg:w-225.5 md:w-225 absolute lg:top-103.5 md:top-107 top-106 left-1/2 lg:left-1/2 md:left-1/2 transform -translate-x-1/2"
        src={image}
        alt=""
      />
    </div>
  );
}
