import RegisterLayout from "../Layout/RegisterLayout";
import image from "../assets/image_Background.svg";
import Vector from "../assetss/Container.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  VerifyUserSchema,
  type VerifyUserInput,
} from "../Validation/ActivationSchema";
import { useVerifyUser } from "../Hooks/Auth/useVerifyUser";
import { showToast } from "../utils/toastHelper";

export default function Activate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VerifyUserInput>({
    resolver: zodResolver(VerifyUserSchema),
  });

  const { verifyUser, loading } = useVerifyUser();

  const navigate = useNavigate();

  const submit = async (formData: VerifyUserInput) => {
    try {
      const result = await verifyUser(formData);
      localStorage.setItem("verificationToken", result.token);
      console.log("ID Verification success :", result);
      showToast(
        result.message || "Verification code sent to your email",
        "success",
      );
      reset();
      navigate("/VerifyActivation", {
        state: {
          email: result.user.email,
          expiresAt: result.expiresAt,
        },
      });
    } catch (err: any) {
      console.log("FULL ERROR:", err);
      console.log("RESPONSE:", err.response);
      console.log("DATA:", err.response?.data);

      const message =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "ID Verification failed";

      console.error(message);
      showToast(message, "error");
    }
  };

  return (
    <RegisterLayout
      image={image}
      subHeading="Manage appointments, view medical information, chat with your care team, and receive support in one place."
      heading="Access your care anytime"
      ul={
        <ul className="flex flex-col gap-3">
          <li className="flex gap-4 font-semibold">
            <img src={Vector} alt="" />
            Book and manage appointments
          </li>
          <li className="flex gap-4 font-semibold">
            <img src={Vector} alt="" />
            Access visit history
          </li>
          <li className="flex gap-4 font-semibold">
            <img src={Vector} alt="" />
            Message your healthcare team
          </li>
          <li className="flex gap-4 font-semibold">
            <img src={Vector} alt="" />
            AI support assistance
          </li>
          <li className="flex gap-4 font-semibold">
            <img src={Vector} alt="" />
            Appointment reminders
          </li>
        </ul>
      }
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="border border-[#D1D5D5] rounded-xl w-full p-5 md:p-8"
      >
        <div className="flex items-center justify-between gap-2 text-xs md:text-base w-full">
          <p className="flex bg-red-500 items-center gap-2">
            <span className="h-8 w-8 rounded-full flex items-center justify-center bg-[#28574E] text-white">
              1
            </span>
            Identity
          </p>
          <span className="bg-[#E1E3E3] w-[45.5px] h-0.5"></span>
          <p className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full flex items-center justify-center bg-[#E1E3E3] text-[#3E3B3B]">
              2
            </span>
            OTP
          </p>
          <span className="bg-[#E1E3E3] w-[45.5px] h-0.5"></span>
          <p className="flex items-center gap-2 text-xs md:text-base text-nowrap">
            <span className="h-8 w-8 rounded-full flex items-center justify-center bg-[#E1E3E3] text-[#3E3B3B]">
              3
            </span>
            Set Up
          </p>
        </div>
        <h1 className="text-[28px] font-semibold pt-5">
          Activate your account
        </h1>
        <p className="pb-5 text-[#757575] text-[18px]">
          Verify your hospital details to set up portal access.
        </p>

        <label className="py-2 font-semibold" htmlFor="id">
          Hospital Patient ID / User ID
        </label>
        <Input
          {...register("UserId")}
          id="id"
          className="my-3"
          type="text"
          placeholder="Enter your Patient ID"
        />
        {errors.UserId && (
          <p className="text-red-500">{errors.UserId.message}</p>
        )}
        <label className="py-2 font-semibold" htmlFor="email">
          Email Address
        </label>
        <Input
          {...register("Email")}
          id="email"
          className="my-3"
          type="email"
          placeholder="Enter your email address"
        />
        {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}

        <label className="py-2 font-semibold" htmlFor="number">
          Registered Phone Number
        </label>
        <Input
          {...register("RegisteredNumber")}
          id="number"
          className="my-3"
          type="tel"
          placeholder="RN004"
        />
        {errors.RegisteredNumber && (
          <p className="text-red-500">{errors.RegisteredNumber.message}</p>
        )}
        <Button
          disabled={loading}
          className="my-4"
          type="submit"
          content={
            loading ? (
              "Verifying..."
            ) : (
              <span className="flex items-center gap-2 justify-center">
                Verify identity
                <FaArrowRight />
              </span>
            )
          }
        />
        <h1 className="text-center text-[#757575] text-[18px]">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-[#28574E]">Log In</span>
          </Link>
        </h1>

        <div className="bg-[#D1D5D5] h-[0.3px] w-full my-8"></div>

        <h1 className="text-center text-[18px] text-[#6F797A]">
          Need help with your Patient ID?{" "}
          <Link to="">
            <span className="text-[#00454B] font-semibold">
              Contact Support
            </span>
          </Link>
        </h1>
      </form>
    </RegisterLayout>
  );
}

// import RegisterLayout from "../Layout/RegisterLayout";
// import Icon from "../assets/Container.svg";
// import image from "../assets/image_Background.svg";
// import { Link, useNavigate } from "react-router";
// import Button from "../components/Button";
// import ArrowIcon from "../assets/ArrowIcon.svg";
// import { useState } from "react";

// interface FormData {
//   UserId: string;
//   email: string;
//   registerNumber: string;
// }

// interface FormError {
//   UserId: string;
//   email: string;
//   registerNumber: string;
// }

// export default function Signup() {
//   const [formData, setFormData] = useState<FormData>({
//     UserId: "",
//     email: "",
//     registerNumber: "",
//   });
//   const [errors, setErrors] = useState<FormError>({
//     UserId: "",
//     email: "",
//     registerNumber: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, name } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validationForm = () => {
//     const { UserId, email, registerNumber } = formData;
//     const newErrors: FormError = {
//       UserId: "",
//       email: "",
//       registerNumber: "",
//     };

//     if (!UserId.trim()) {
//       newErrors.UserId = "UserId is required";
//     } else if (UserId.trim().length < 4) {
//       newErrors.UserId = "UserId must be al least 5 characters";
//     }

//     const emailRegex = /^\S+@\S+\.\S+$/;
//     if (!email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!emailRegex.test(email)) {
//       newErrors.email = "Invalid email address";
//     }

//     if (!registerNumber.trim()) {
//       newErrors.registerNumber = "Registration number is required";
//     } else {
//       const regRegex = /^RN\d{3}$/;

//       if (!regRegex.test(registerNumber))
//         newErrors.registerNumber =
//           "Registration number must be in format RN004";
//     }

//     setErrors(newErrors);

//     return !newErrors.UserId && !newErrors.email && !newErrors.registerNumber;
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (!validationForm()) return;
//     console.log("Details submitted:", formData);

//     setFormData({
//       UserId: "",
//       email: "",
//       registerNumber: "",
//     });

//     navigate("/SignUpVerify");
//   };

//   return (
//     <RegisterLayout
//       image={image}
//       heading="Access your care anytime"
//       subHeading="Manage appointments, view medical information, chat with your care team, and receive support in one place."
//       ul={
//         <ul className="flex lg:flex-col flex-col gap-3">
//           <li className="flex gap-1 text-[16px] items-center">
//             <span>
//               <img src={Icon} alt="" />
//             </span>
//             Book and manage appointments
//           </li>
//           <li className="flex gap-1 text-[16px] items-center">
//             <span>
//               <img src={Icon} alt="" />
//             </span>
//             Access visit history
//           </li>
//           <li className="flex gap-1 text-[16px] items-center">
//             <span>
//               <img src={Icon} alt="" />
//             </span>
//             Message your healthcare team
//           </li>
//           <li className="flex gap-1 text-[16px] items-center">
//             <span>
//               <img src={Icon} alt="" />
//             </span>
//             AI support assistance
//           </li>
//           <li className="flex gap-1 text-[16px] items-center">
//             <span>
//               <img src={Icon} alt="" />
//             </span>
//             Appointment reminders
//           </li>
//         </ul>
//       }
//     >
//       {/* Right Side */}
//       <div className="flex justify-center items-center w-full">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-177.5 mx-4 rounded-xl bg-white border border-[#D1D5D5] p-6 my-8 lg:p-10 lg:my-13 flex flex-col shadow-sm"
//         >
//           <div className="flex items-center justify-between">
//             {/* STEP 1 */}
//             <div className="flex items-center gap-2">
//               {/* Circle */}
//               <div className="w-8 h-8 rounded-full bg-[#28574E] flex items-center justify-center">
//                 <p className="text-white text-[14px] font-bold">1</p>
//               </div>
//               <p className="font-semibold text-[#28574E] text-[16px] md:text-[14px]">
//                 Identity
//               </p>
//             </div>
//             <div className="w-10 h-0.5 bg-[#E5E7EB]"></div>
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-[#E1E3E3] flex items-center justify-center">
//                 <p className="text-[#3E3B3B] text-[14px] font-medium">2</p>
//               </div>

//               <p className="text-[#3E3B3B] text-[16px] md:text-[14px]">OTP</p>
//             </div>
//             <div className="w-10 h-0.5 bg-[#E5E7EB]"></div>
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-[#E1E3E3] flex items-center justify-center">
//                 <p className="text-[#3E3B3B] text-[14px] font-medium">3</p>
//               </div>
//               <p className="text-[#3E3B3B] text-[16px]">Set Up</p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-1.25 pt-8">
//             <h1 className="fontOutfit font-medium text-[25px] md:text-[22px] leading-none tracking-normal text-[#141313]">
//               Activate your account
//             </h1>
//             <p className="fontOutfit font-light text-lg md:text-base leading-none tracking-normal text-[#757575]">
//               Verify your hospital details to set up portal access.
//             </p>
//           </div>
//           <div className="flex flex-col gap-2 pt-8">
//             <label
//               className="font-medium text-[18px] leading-[100%] tracking-[0%] text-[#141313]"
//               htmlFor="userId"
//             >
//               Hospital Patient ID / User ID
//             </label>
//             <input
//               value={formData.UserId}
//               onChange={handleChange}
//               className="block my-2 bg-[#FFFCFC] text-[#5b5a5a] border border-[#D9D9D9]  fontOutfit font-normal text-base/[100%] tracking-normal text-[16px] leading-[100%] rounded-lg w-full h-13 px-5 gap-2.5"
//               placeholder="Enter Patient ID"
//               type="text"
//               id="userID"
//               name="UserId"
//             />
//             {errors.UserId && (
//               <p className="text-red-800 font-semibold">{errors.UserId}</p>
//             )}
//           </div>
//           <div className="flex flex-col gap-1.25 pt-3">
//             <label className="text-[18px] font-semibold" htmlFor="userEmail">
//               Email Address
//             </label>
//             <input
//               value={formData.email}
//               onChange={handleChange}
//               className="block my-2 bg-[#FFFCFC] text-[#5b5a5a] border border-[#D9D9D9] fontOutfit font-normal text-base/[100%] tracking-normal text-[16px] leading-[100%] rounded-lg w-full h-13 px-5 gap-2.5"
//               placeholder="Enter your email address"
//               type="text"
//               id="Email"
//               name="email"
//             />
//             {errors.email && (
//               <p className="text-red-800 font-semibold">{errors.email}</p>
//             )}
//           </div>
//           <div className="flex flex-col gap-2 pt-3">
//             <label
//               className="text-[18px] md:text-[16px] font-semibold"
//               htmlFor="userNumber"
//             >
//               Registered Number
//             </label>
//             <input
//               value={formData.registerNumber}
//               onChange={handleChange}
//               className="block my-2 bg-[#FFFCFC] text-[#5b5a5a] border border-[#D9D9D9] fontOutfit font-normal text-base/[100%] tracking-normal text-[16px] leading-[100%] rounded-lg w-full h-13 px-5 gap-2.5"
//               placeholder="RN004"
//               type="text"
//               id="Number"
//               name="registerNumber"
//             />
//             {errors.registerNumber && (
//               <p className="text-red-800 font-semibold">
//                 {errors.registerNumber}
//               </p>
//             )}
//           </div>

//           <Button
//             className="mt-6 flex items-center justify-center"
//             content="Verify Identity"
//             type="submit"
//             icon={ArrowIcon}
//           />

//           <div>
//             <div className="flex flex-col pt-2 gap-5">
//               <p className="fontOutfit font-normal text-[18px] leading-[100%] tracking-[0%] text-[#5a5858] px-18">
//                 Already have an account?
//                 <Link to="/Login">
//                   <span className="text-[#28574E] font-medium">Log In</span>
//                 </Link>
//               </p>
//               <div className="border-t border-[#D1D5D5]"></div>
//               <p className="gap-1 fontOutfit font-normal text-[14px] leading-[100%] tracking-[0%] text-[#3F484A] text-center flex items-center justify-center">
//                 Need help with your Patient ID?
//                 <Link to="">
//                   <span className="text-[#28574E] fontOutfit text-[14px] font-normal leading-[100%] tracking-normal text-center flex items-center justify-center">
//                     Contact Support
//                   </span>
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </RegisterLayout>
//   );
// }
