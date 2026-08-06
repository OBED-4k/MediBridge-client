import { useNavigate } from "react-router";
import Button from "../components/Button";

export default function ActivationSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-137.5 rounded-xl shadow-lg p-10 text-center">
        <div className="text-6xl mb-5">🎉</div>

        <h1 className="text-3xl fontOutfit font-bold text-[#28574E]">
          Welcome to MediBridge!
        </h1>

        <p className="mt-4 fontOutfit text-gray-600">
          Your account has been activated successfully.
        </p>

        <p className="mt-2 fontOutfit text-gray-600">
          Thank you for choosing MediBridge.
        </p>

        <Button
          className="mt-8"
          content="Continue to Dashboard"
          onClick={() => navigate("/patientDashboard")}
          type={"reset"}
        />
      </div>
    </div>
  );
}
