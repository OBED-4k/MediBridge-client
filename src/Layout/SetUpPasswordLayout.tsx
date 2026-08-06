import Logo from "../assets/Logo.svg";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
  heading: string;
  subHeading: string;
  image: string;
};

export default function SetUpPasswordLayout({
  heading,
  subHeading,
  children,
  image,
}: Props) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Main Content */}
      <div className="flex lg:flex-row flex-col md:flex-col w-full">
        {/* Left Side */}
        <div
          style={{ width: "100%" }}
          className="authI px-10 py-8 overflow-hidden w-1/2"
        >
          <div className="max-w-125 flex flex-col gap-8.75 mx-auto">
            <img className="mx-10" src={Logo} alt="" />
            <h1 className="text-[#28574E] text-nowrap fontLibre font-extrabold px-10 text-[40px] pt-10 leading-[100%] tracking-[0%] align-middle">
              {heading}
            </h1>
            <div className="">
              <p className="fontOutfit text-[#3E3B3B] font-light text-[18px] inline-block">
                {subHeading}
              </p>
            </div>
            <img src={image} alt="" className="w-100 mt-15 mx-auto" />
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center md:w-full px-4.5 md:px-20 lg:px-8">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
