// import "./App.css";
// import { Routes, Route } from "react-router";
// import Login from "./Pages/Login";
// import SignUp from "./Pages/Activation";
// import ResetPassword from "./Pages/Auth/ResetPassword";
// import VerifyCode from "./Pages/VerifyActivation";
// import ForgotPassword from "./Pages/Auth/ForgotPassword";
// import SignUpVerify from "./Pages/SignUpVerify";
// import SetPassword from "./Pages/SetPassword";
// import Verification from "./Pages/VerifyRecovery";
// import ModalForPassword from "./components/ModalForPassword";
// import AccountIsReady from "./components/AccountIsReady";
// import LandingPage from "./Pages/LandingPage";
// import DepartmentPage from "./Pages/DepartmentPage";
// import Cardiology from "./Pages/Cardiology";
// import Neurology from "./Pages/Neurology";
// import AiSupportPage from "./Pages/AiSupportPage";
// import AiSupportPage2 from "./Pages/AiSupportPage2";
// import DashBoardLand from "./components/DashBoardLand";
// import DashBoardLand2 from "./components/DashBoardLand2";
// import DashBoardBody from "./Pages/DashBoardBody";
// import DashBoard from "./Pages/DashBoard";
// import SideBar from "./components/SideBar";
// import Appointment from "./Pages/AppointmentPage";
// import Appointment_2 from "./Pages/AppointmentPage_2";
// import AppointmentPage_Cancel from "./Pages/AppointmentPage_Cancel";
// import Department from "./Pages/Department";
// import MedicalRecords from "./Pages/MedicalRecords";
// import NoMedicalRecords from "./Pages/NoMedicalRecords";
// import Messages from "./Pages/Messages";
// import AiSupport from "./Pages/AiSupport";
// import BookAppointment from "./Pages/BookAppointment";
// // import BookAppointmentStep2 from "./Pages/Auth/BookAppointmentStep2";
// // import BookAppointmentStep3 from "./Pages/Auth/BookAppointmentStep3";
// // import BookAppointmentStep31 from "./Pages/Auth/BookAppointmentStep31";
// // import BookAppointmentStep4 from "./Pages/Auth/BookAppointmentStep4";
// // import BookAppointmentStep5 from "./Pages/Auth/BookAppointmentStep5";
// // import DoctorProfile from "./Pages/Auth/DoctorProfile";
// import AppointmentDetails from "./Pages/AppointmentDetails";
// import ConfirmRescheduleAppointment from "./Pages/ConfirmRescheduleAppointment";
// import RescheduleAppointment from "./Pages/RescheduleAppointment";
// import RescheduleAppointment2 from "./Pages/RescheduleAppointment2";
// // import ModalToConfirmAppointment from "./components/ModalToConfirmAppointment";
// import ModalToRescheduledSuccessfully from "./components/ModalToRescheduledSuccessfully";

// export default function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/SignUp" element={<SignUp />} />
//         <Route path="/resetPassword" element={<ResetPassword />} />
//         <Route path="/verifyCode" element={<VerifyCode />} />
//         <Route path="/forgotPassword" element={<ForgotPassword />} />
//         <Route path="/signUpVerify" element={<SignUpVerify />} />
//         <Route path="/setPassword" element={<SetPassword />} />
//         <Route path="/verification" element={<Verification />} />
//         <Route path="/modalForPassword" element={<ModalForPassword />} />
//         <Route path="/accountIsReady" element={<AccountIsReady />} />
//         <Route path="/departmentPage" element={<DepartmentPage />} />
//         <Route path="/cardiology" element={<Cardiology />} />
//         <Route path="/neurology" element={<Neurology />} />
//         <Route path="/aiSupportPage" element={<AiSupportPage />} />
//         <Route path="/aiSupportPage2" element={<AiSupportPage2 />} />
//         <Route path="/dashBoardLand" element={<DashBoardLand />} />
//         <Route path="/dashBoardLand2" element={<DashBoardLand2 />} />
//         <Route path="/dashBoardBody" element={<DashBoardBody />} />
//         <Route path="/dashBoard" element={<DashBoard />} />
//         <Route path="/sideBar" element={<SideBar />} />
//         <Route path="/appointment" element={<Appointment />} />
//         <Route path="/appointment_2" element={<Appointment_2 />} />
//         <Route
//           path="/appointmentPage_Cancel"
//           element={<AppointmentPage_Cancel />}
//         />
//         <Route path="/appointmentDetails" element={<AppointmentDetails />} />
//         <Route path="/department" element={<Department />} />
//         <Route path="/medicalRecords" element={<MedicalRecords />} />
//         <Route path="/noMedicalRecords" element={<NoMedicalRecords />} />
//         <Route path="/messages" element={<Messages />} />
//         <Route path="/aiSupport" element={<AiSupport />} />
//         <Route path="/bookAppointment" element={<BookAppointment />} />
//         {/* <Route
//           path="/bookAppointmentStep2"
//           element={<BookAppointmentStep2 />}
//         />
//         <Route
//           path="/bookAppointmentStep3"
//           element={<BookAppointmentStep3 />}
//         />
//         <Route
//           path="/bookAppointmentStep31"
//           element={<BookAppointmentStep31 />}
//         />
//         <Route
//           path="/bookAppointmentStep4"
//           element={<BookAppointmentStep4 />}
//         />
//         <Route
//           path="/bookAppointmentStep5"
//           element={<BookAppointmentStep5 />}
//         /> */}
//         {/* <Route path="/doctorProfile" element={<DoctorProfile />} /> */}
//         {/* <Route
//           path="/modalToConfirmAppointment"
//           element={<ModalToConfirmAppointment />}
//         /> */}
//         <Route
//           path="/modalToRescheduledSuccessfully"
//           element={<ModalToRescheduledSuccessfully />}
//         />

//         <Route
//           path="/rescheduleAppointment"
//           element={<RescheduleAppointment />}
//         />
//         <Route
//           path="/rescheduleAppointment2"
//           element={<RescheduleAppointment2 />}
//         />
//         <Route
//           path="/confirmRescheduleAppointment"
//           element={<ConfirmRescheduleAppointment />}
//         />
//       </Routes>
//     </>
//   );
// }

import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import VerifyRecovery from "./Pages/VerifyRecovery";
import Activate from "./Pages/Auth/Activate";
import SetPassword from "./Pages/SetPassword";
import VerifyActivation from "./Pages/VerifyActivation";
import AboutUs from "./Pages/About/About";
import HomePage from "./Pages/HomePage";
import Department from "./Pages/Department";
import SupportPage from "./Pages/SupportPage";
import ScrollToTop from "./components/ScrollToTop";
import PatientPage from "./Pages/PatientPage";
import Error404 from "./components/Error404";
import ProtectRoute from "./components/ProtectRoute";
import ActivationSuccess from "./Pages/ActivationSuccess";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/activate" element={<Activate />} />
        <Route path="/verifyActivation" element={<VerifyActivation />} />
        <Route path="/setPassword" element={<SetPassword />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/verifyRecovery" element={<VerifyRecovery />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/activation-success" element={<ActivationSuccess />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<AboutUs />} />

        <Route
          path="/patientDashboard"
          element={
            <ProtectRoute>
              <PatientPage />
            </ProtectRoute>
          }
        />

        <Route path="*" element={<Error404 />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <ScrollToTop />
    </>
  );
}

export default App;
