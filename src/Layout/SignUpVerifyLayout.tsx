import Logo from "../assets/Logo.svg";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
  heading: string;
  subHeading: string;
  image: string;
};

export default function SignUpVerifyLayout({
  heading,
  subHeading,
  children,
  image,
}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex lg:flex-row flex-col md:flex-col w-full">
        {/* Left Side */}
        <div
          style={{ width: "100%" }}
          className="authBgg px-10 sm: py-8 overflow-hidden lg:w-1/2 md:w-full"
        >
          <div className="flex flex-col gap-8.75 max-w-125 mx-auto">
            <div>
              <img className="mx-10" src={Logo} alt="" />
            </div>
            <h1 className="text-[#28574E] fontLibre font-extrabold px-10 text-[40px] pt-10 leading-[100%] tracking-[0%] align-middle">
              {heading}
            </h1>
            <div className="px-10">
              <p className="font-outfit font-light text-[18px] inline-block">
                {subHeading}
              </p>
            </div>
            <img src={image} alt="" className="w-100 mx-auto" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center px-4 lg:px-8">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
