import { Link, useLocation } from "react-router";
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
import { CiSearch } from "react-icons/ci";

export default function AppointmentLand({
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
    { path: "/AccountSettings", label: "Account Settings", icon: Settings },
  ];
  return (
    <div className="w-full mx-auto min-h-screen flex flex-col">
      <div className="top w-full border border-[#E6EFF5] h-22.5 px-5 flex items-center">
        <img className="w-46" src={Logo} alt="" />
        <div className="flex items-center gap-20">
          <div className="relative pl-8">
            <CiSearch className="w-4.5 h-4.5 absolute left-11 top-1/2 -translate-y-1/2 text-[#A0A0A0]" />
            <input
              className="border border-[#E7E4E4] w-140 pl-9 pr-3 py-2.5 rounded-md  outline-none focus:border-[#28574E]"
              type="text"
              placeholder="Search condition, department....."
            />
          </div>

          <div className="flex gap-8">
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
      <div className="flex flex-1">
        <div className="w-62.5 flex-col pt-6 min-h-full border border-[#E6E3E3] shadow-lg bottom flex">
          <div className="w-52 m-3 flex flex-col gap-90.25">
            <div className="flex flex-col gap-3.5">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-4.5 py-2.5 rounded-sm gap-2 ${
                      isActive ? "bg-[#28574E]" : "bg-white"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center rounded-sm p-1 ${
                        isActive ? "text-white" : "bg-transparent"
                      }`}
                    >
                      <img
                        className={`w-6 h-6 ${
                          isActive
                            ? "brightness-0 invert"
                            : "opacity-60 grayscale"
                        }`}
                        src={item.icon}
                        alt=""
                      />
                    </div>
                    <span
                      className={`fontOutfit text-[18px] text-nowrap ${
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
              className="flex gap-3 mb-4 border-4 border-white w-53 h-11.5 rounded-b-sm px-4.5 py-2.5 text-red-600"
            >
              <img className="w-6 h-6" src={Logout} alt="" />
              <span>Log Out</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 p-6">{children}</div>
      </div>
    </div>
  );
}
