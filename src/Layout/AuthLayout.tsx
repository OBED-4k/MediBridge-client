import React from "react";
import Logo from "../assets/Logo.svg";
import Footer from "../components/Footer";
import { Link } from "react-router";

type Props = {
  heading?: string;
  subHeading?: string;
  children: React.ReactNode;
};

export default function AuthLayout({ heading, subHeading, children }: Props) {
  return (
    <div>
      <div className="authBg h-screen w-full flex items-center justify-center">
        <div className="container flex items-center justify-center mx-auto">
          <div className="bg-white rounded-lg w-full md:w-160 lg:w-117.5 h-auto py-6 px-8">
            <Link to="/">
              <img className="flex mx-auto my-4" src={Logo} alt="" />
            </Link>

            <h1 className="lg:text-[28px] md:text-[35px] text-[28px] font-semibold fontOutfit">
              {heading}
            </h1>
            <p className="lg:text-[18px] text-[18px] md:text-[20px] text-[#757575] fontOutfit">
              {subHeading}
            </p>

            <div className="pt-4">{children}</div>
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
// import { Link } from "react-router";

// type Props = {
//   children: React.ReactNode;
//   heading?: string;
//   subHeading?: string;
// };
// export default function AuthLayout({ children, heading, subHeading }: Props) {
//   return (
//     <div className="authBg min-h-screen w-full flex flex-col items-center justify-center mx-auto">
//       {/* Main Content */}
//       <div className="flex-1 m-25 flex items-center justify-center gap-8 px-4 container">
//         <div className="bg-white w-full lg:w-117.5 h-auto p-6 max-w-105 rounded-lg shadow-sm">
//           {/* LOGO */}
//           <Link to="/">
//             <img className="mx-auto pb-6" src={Logo} alt="" />
//           </Link>
//           {/* Header */}
//           <div className=" flex flex-col gap-2">
//             <h1 className="text-[28px] font-semibold">{heading}</h1>

//             <p className="font-light text-[18px] leading-6 text-[#605f5f]">
//               {subHeading}
//             </p>
//           </div>

//           {/* FORM */}
//           <div className="mt-6">{children}</div>
//         </div>
//       </div>
//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }
