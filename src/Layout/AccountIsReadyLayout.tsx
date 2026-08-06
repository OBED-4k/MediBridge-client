import Logo from "../assets/mLogo.svg";

type Props = {
  children: React.ReactNode;
  heading: string;
  subHeading: string;
};

export default function AccountIsReady({
  heading,
  subHeading,
  children,
}: Props) {
  return (
    <div className="authI min-h-screen flex items-center justify-center">
      <div className="w-[320px] bg-white rounded-lg p-6 shadow-lg">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Success" />
        </div>
        {/* Text */}
        <div className="text-center">
          <h1 className="text-[24px] font-semibold text-[#141313]">
            {heading}
          </h1>
          <p className="mt-2 text-[#757575] text-[16px]">{subHeading}</p>
        </div>
        {/* Button Area */}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
