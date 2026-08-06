import AppLayout from "../Layout/AppLayout";
import Image from "../assets/NavI.svg";
import WhyMediBridge from "../components/HomePageComponents/WhyMediBridge";
import Explore from "../components/HomePageComponents/Explore";
import PatientStory from "../components/HomePageComponents/PatientStories";
import FAQ from "../components/HomePageComponents/FAQ";
import NewsLetter from "../components/HomePageComponents/NewsLetter";
import Button from "../components/Button";
import { useAuth } from "../Hooks/Auth/useAuth";
import { useNavigate } from "react-router";

export default function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate(user ? "/patientDashboard" : "/login");
  };

  const handleAISupport = () => {
    navigate("/support");
  };

  return (
    <AppLayout
      headerProps={{
        className: "bg-[#28574E] h-[550px] lg:h-[700px] md:h-[720px] relative",
        heading: "Healthcare That Connects You through Sound Code",
        subHeading:
          "Book appointments, talk with trusted doctors, receive support, and get instant AI health guidance in one calm experience.",
        image: Image,
        others: (
          <div className="flex items-center gap-5 fontOutfit">
            <Button
              onClick={handleBookAppointment}
              type="button"
              content="Book Appointment"
              variant="secondary"
              width="lg:w-[236px] md:w-[236px] w-[170px]"
            />
            <Button
              onClick={handleAISupport}
              type="button"
              content="Chat With AI Support"
              variant="primaryWBorder"
              width="lg:w-[236px] md:w-[236px] w-[185px]"
              className="bandGreen"
            />
          </div>
        ),
      }}
    >
      <WhyMediBridge />
      <Explore />
      <PatientStory />
      <FAQ />
      <NewsLetter />
    </AppLayout>
  );
}
// import LandingPage from "./LandingPage";
// import LandingLayout from "../Layout/LandingLayout";

// export default function HomePage() {
//   return (
//     <LandingLayout>
//       <LandingPage />
//     </LandingLayout>
//   );
// }
