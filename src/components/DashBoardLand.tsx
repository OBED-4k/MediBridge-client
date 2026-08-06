// import { useState } from "react";
import Logo from "../assets/logos.svg";
import Dashboard from "../assets/Dashboard/Dashboard.svg";
import Appointment from "../assets/APPCA.svg";
import Department from "../assets/Department.svg";
import Medical from "../assets/MR.svg";
import Messages from "../assets/message-circle.svg";
import AiSupport from "../assets/AISupport.svg";
import Settings from "../assets/ACCSettings.svg";
import Logout from "../assets/Logout.svg";
import Bell from "../assets/Bell.svg";
import Img from "../assets/img_2.svg";
import ArrowDown from "../assets/ArrowDown.svg";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router";

export default function DashBoardLand({
  children,
}: {
  children?: React.ReactNode;
}) {
  // const [activeTab, setActiveTab] = useState<string>("dashboard");
  const location = useLocation();
  const navItems = [
    { path: "/DashboardBody", label: "Dashboard", icon: Dashboard },
    { path: "/Appointment", label: "Appointment", icon: Appointment },
    { path: "/Department", label: "Department", icon: Department },
    { path: "/MedicalRecords", label: "Medical Records", icon: Medical },
    { path: "/Messages", label: "Messages", icon: Messages },
    { path: "/AiSupport", label: "AI Support", icon: AiSupport },
    { path: "/AccountSetting", label: "Account Settings", icon: Settings },
  ];
  return (
    <div className="w-full mx-auto">
      <div className="top w-full border border-[#E6EFF5] h-22.5 flex items-center">
        <div className="flex items-center">
          <div className="flex mx-5">
            <img className="w-80" src={Logo} alt="" />
          </div>
          <div className="flex gap-110">
            {/* {activeTab === "dashboard" && (
              
            )} */}
            <div>
              <h1 className="fontOutfit font-medium text-[28px]">Dashboard</h1>
            </div>
            {/* {activeTab === "appointment" && (
              <div className="w-281 h-12.5">
                <input
                  className="border"
                  type="text"
                  placeholder="Search condition, department....."
                />
              </div>
            )} */}

            <div className="flex gap-8 mr-35">
              <img className="w-12.5 h-12.5" src={Bell} alt="" />
              {/* user avatar */}
              <div className="flex gap-3 items-center">
                <img src={Img} alt="" />
                <p className="fontOutfit font-normal text-[14px] text-[#232323]">
                  Sarah Martins Sarahmartins32@gmailcom
                </p>
                <img className="w-3.75 h-1.75 " src={ArrowDown} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="w-62.5 flex-col pt-6 h-230 border mb-30 border-[#E6E3E3] shadow-lg bottom flex">
          <div className="w-53.5 m-3 flex flex-col gap-90.25">
            <div className="flex flex-col gap-3.5">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-4.5 py-2.5 rounded-sm ${
                      isActive ? "bg-[#28574E]" : "bg-white"
                    }`}
                  >
                    <img className="w-6 h-6" src={item.icon} alt="" />
                    <span
                      className={`fontOutfit text-[18px] px-2 ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-[#605E5E] font-normal"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            <Link
              to="/logout"
              className="flex gap-3 mb-4 border-4 border-white w w-53 h-11.5 rounded-b-sm px-4.5 py-2.5 text-red-600"
            >
              <img className="w-6 h-6" src={Logout} alt="" />
              <span>Log Out</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 p-6">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
