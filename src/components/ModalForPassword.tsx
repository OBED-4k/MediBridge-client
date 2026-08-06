import ModalLayout from "../Layout/ModalLayout";
import { Link } from "react-router";

export default function PasswordResetSuccess() {
  return (
    <ModalLayout
      heading="Password Reset Successful"
      subHeading="You can now log in with your new password."
    >
      <Link to="/Login">
        <button
          className="
            w-full
            h-12
            bg-[#28574E]
            text-white
            rounded-lg
            hover:bg-[#1F463F]
            transition
          "
        >
          Login
        </button>
      </Link>
    </ModalLayout>
  );
}
