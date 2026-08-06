import AccountLayout from "../Layout/AccountIsReadyLayout";
import { Link } from "react-router";

export default function AccountSuccess() {
  return (
    <AccountLayout
      heading="Your account is ready."
      subHeading="Account activation complete. You can now access appointments, records, and 24/7 medical support."
    >
      <Link to="/">
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
          Go to Dashboard
        </button>
      </Link>
    </AccountLayout>
  );
}
