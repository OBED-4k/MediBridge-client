import React from "react";
import Logo from "../assets/Logo.svg";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
  heading: string;
  subHeading: string;
  ul?: React.ReactNode;
  image: string;
};

export default function RegisterLayout({
  heading,
  subHeading,
  children,
  ul,
  image,
}: Props) {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <div className="w-full flex md:flex-row flex-col">
          <div className="authBgGradient lg:px-10 md:px-5 px-10 pt-8 pb-15 lg:w-1/2 md:w-105 w-full h-auto flex flex-col items-center justify-center gap-8.75">
            <div className="container mx-auto flex flex-col justify-center w-109">
              <img className="w-46 h-9.5 my-2" src={Logo} alt="" />
              <h1 className="text-[#28574E] lg:text-[40px] md:text-[36px] text-[40px] font-semibold fontLibre leading-10 py-2">
                {heading}
              </h1>
              <p className="text-[#3E3B3B] lg:text-[18px] md:text-[18px] lg:w-110 md:w-102 w-100 text-[15px]  py-2 fontOutfit">
                {subHeading}
              </p>
              <div className="pt-4 pb-8 fontOutfit">{ul}</div>
              <img
                className="lg:w-109 md:w-90 w-99 h-[314.05px]"
                src={image}
                alt=""
              />
            </div>
          </div>
          <div className="md:w-100 lg:w-full w-full lg:px-10 md:px-5 px-10 pt-10 flex items-center justify-center">
            <div className="container mx-auto flex items-center justify-center fontOutfit">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// import React from "react";
// import Logo from "../assets/Logo.svg";
// import Footer from "../components/Footer";

// type Props = {
//   children: React.ReactNode;
//   heading: string;
//   subHeading: string;
//   ul?: React.ReactNode;
//   image: string;
// };

// export default function RegisterLayout({
//   heading,
//   subHeading,
//   children,
//   ul,
//   image,
// }: Props) {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-col">
//       {/* Main Content */}
//       <div className="flex lg:flex-row flex-col md:flex-col w-full">
//         {/* Left Side */}
//         <div
//           style={{ width: "100%" }}
//           className="authBg px-10 sm: py-8 overflow-hidden w-1/2 md:w-full"
//         >
//           <div className="lg:max-w-125 mx-auto">
//             <img src={Logo} alt="" />
//             <h1 className="text-[#28574E] fontLibre font-extrabold text-[40px] leading-[100%] tracking-[0%] align-middle mt-8">
//               {heading}
//             </h1>
//             <p className="fontOutfit font-light text-[18px] leading-[100%] tracking-[0%] align-middle inline-block mt-4">
//               {subHeading}
//             </p>
//             <div className="fontOutfit font-normal text-[16px] leading-[100%] tracking-normal mt-8">
//               {ul}
//             </div>
//             <img src={image} alt="" className=" w-100 mt-15 mx-auto md:block" />
//           </div>
//         </div>
//         {/* Right Side */}
//         <div
//           style={{ width: "100%" }}
//           className="lg:w-1/2 md:w-full w-full flex flex-col lg:justify-center lg:items-center px-4 md:px-8"
//         >
//           {children}
//         </div>
//       </div>
//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }
