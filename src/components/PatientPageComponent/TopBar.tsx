import Logo from "../../assets/Logo.svg";
import { Bell } from "lucide-react";
import { Link } from "react-router";
import UserMenu from "./UserMenu";
import type { AuthUser } from "../../Hooks/Auth/useAuth";
import { Search } from "lucide-react";

type Props = {
  activeTab: string;
  user: AuthUser | null;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onLogout: () => void;
};

export default function Topbar({
  activeTab,
  user,
  isOpen,
  setIsOpen,
  onLogout,
}: Props) {
  const renderTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return <p className="text-[28px] font-medium fontOutfit">Dashboard</p>;

      case "settings":
        return <p>Manage your account settings.</p>;

      default:
        return (
          <div className="relative w-125.5 h-11">
            <span className="absolute top-3 left-3">
              <Search color="#605E5E" size={18} />
            </span>
            <input
              placeholder="Search condition, department..."
              className="border border-[#E7E4E4] rounded-lg text-[14px] px-9 py-2 w-full h-11"
            />
          </div>
        );
    }
  };

  return (
    <div className="flex border-b border-[#E6EFF5] py-4 px-5 w-full items-center">
      <Link to="/">
        <img className="w-52.5" src={Logo} alt="logo" />
      </Link>

      <div className="flex justify-between items-center w-full pl-22">
        {renderTitle()}

        <div className="flex items-center gap-5">
          <span className="w-12 h-12 rounded-full bg-[#F5F7FA] flex items-center justify-center">
            <Bell />
          </span>

          <UserMenu
            user={user}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onLogout={onLogout}
          />
        </div>
      </div>
    </div>
  );
}
