import { useState } from "react";
import { useNavigate } from "react-router";

import Footer from "../components/Footer";
import Dashboard from "../components/PatientPageComponent/DashBoard/DashBoard";
import Appointments from "../components/PatientPageComponent/Appointment/Appointment";
// import Department from "../components/PatientPageComponent/Departments/Department";
import LogoutModal from "../components/LogoutModal";

import Sidebar from "../components/PatientPageComponent/SideBar";
import TopBar from "../components/PatientPageComponent/TopBar";
import { useAuth } from "../Hooks/Auth/useAuth";
import { patientTabs } from "../components/PatientPageComponent/PatientTabs";

export default function PatientPage() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [activeTab, setActiveTab] = useState("dashboard");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;

      case "appointments":
        return <Appointments />;

      // case "departments":
      //   return <Department />;

      case "medRecords":
        return <p>Medical Records</p>;

      case "messages":
        return <p>Messages</p>;

      case "aiSupport":
        return <p>AI Support</p>;

      case "settings":
        return <p>Settings</p>;

      default:
        return null;
    }
  };

  return (
    <>
      <div className="container mx-auto w-full">
        <TopBar
          activeTab={activeTab}
          user={user}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onLogout={() => setShowLogoutModal(true)}
        />

        <div className="flex">
          <Sidebar
            tabs={patientTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onLogout={() => setShowLogoutModal(true)}
          />

          <main className="flex-1 p-10">{renderContent()}</main>
        </div>
      </div>

      {showLogoutModal && (
        <LogoutModal
          onConfirm={handleLogout}
          onClose={() => setShowLogoutModal(false)}
        />
      )}

      <Footer />
    </>
  );
}
