import { useState } from "react";
import RegisterLayout from "../Layout/RegisterLayout";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router";
import Button from "../components/Button";
import Image from "../assets/Lock.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  setPasswordSchema,
  type SetPasswordInput,
} from "../Validation/ActivationSchema";
import { useSetPassword } from "../Hooks/Auth/useSetPassword";
import { showToast } from "../utils/toastHelper";
import { Eye, EyeOff } from "lucide-react";

export default function SetPassword() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showCPassword, setShowCPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SetPasswordInput>({
    resolver: zodResolver(setPasswordSchema),
  });

  const { setPassword, loading, error } = useSetPassword();

  const navigate = useNavigate();

  const submit = async (formData: SetPasswordInput) => {
    try {
      const result = await setPassword(formData);
      console.log("Password set successfully :", result);
      if (result) {
        localStorage.setItem("authenticationToken", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
      }
      showToast(result.message || "Password set successfully", "success");
      reset();
      navigate("/activation-success", {
        state: {
          firstname: result.user.firstname,
          lastname: result.user.lastname,
          email: result.user.email,
        },
      });
    } catch (err) {
      console.error("Set Password error:", err, error);
      showToast(error || "Failed to set password", "error");
    }
  };

  // const togglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setShowPassword((prev) => !prev);
  // };

  // const toggleCPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setShowCPassword((prev) => !prev);
  // };

  return (
    <RegisterLayout
      heading="Secure Your Access"
      subHeading="Your health data is protected with industry-leading encryption. Step 3 of 3: finalise your security credentials."
      image={Image}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="border border-[#D1D5D5] rounded-xl w-full p-8"
      >
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-[#28574E]">
            <span className="h-8 w-8 rounded-full flex items-center justify-center bg-[#28574E] text-white">
              1
            </span>
            Identity
          </p>
          <span className="bg-[#28574E] w-[45.5px] h-0.5"></span>
          <p className="flex items-center gap-2 text-[#28574E]">
            <span className="h-8 w-8 rounded-full flex items-center justify-center bg-[#28574E] text-white">
              2
            </span>
            OTP
          </p>
          <span className="bg-[#28574E] w-[45.5px] h-0.5"></span>
          <p className="flex items-center gap-2 text-[#28574E]">
            <span className="h-8 w-8 rounded-full flex items-center justify-center bg-[#28574E] text-white">
              3
            </span>
            Set Up
          </p>
        </div>
        <h1 className="text-[28px] font-semibold pt-5">Set Up Password</h1>
        <p className="pb-5 text-[#757575] text-[18px]">
          finalise your security credentials.
        </p>

        <label className="text-[18px] font-semibold" htmlFor="newPassword">
          Password
        </label>
        <div className="relative">
          <Input
            {...register("password")}
            id="newPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your new password"
            className="my-2 "
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <label className="text-[18px] font-semibold" htmlFor="confirmPassword">
          Confirm Password
        </label>

        <div className="relative">
          <Input
            {...register("confirmPassword")}
            id="confirmPassword"
            type={showCPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className="my-2"
          />
          <button
            type="button"
            onClick={() => setShowCPassword(!showCPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showCPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {/* <button
            type="button"
            onClick={toggleCPassword}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            Show
          </button> */}
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}

        <div className="flex gap-2 items-center py-2">
          <input
            {...register("terms")}
            className="h-5 w-6"
            id="checkBox"
            type="checkbox"
          />
          <label className="text-[18px]" htmlFor="checkBox">
            I agree to the{" "}
            <Link to="">
              <span className="text-[#28574E]">Terms of Service</span>
            </Link>{" "}
            and{" "}
            <Link to="">
              <span className="text-[#28574E]">Privacy Policy</span>
            </Link>
          </label>
        </div>
        {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}

        <Button
          className="my-5"
          type="submit"
          content={loading ? "Activating..." : "Activate Account"}
          disabled={loading}
        />

        <p className="pt-8 text-center">
          Need help?{" "}
          <Link to="">
            <span className="text-[#28574E] font-semibold">
              Contact Support
            </span>
          </Link>
        </p>
      </form>
    </RegisterLayout>
  );
}

// import SetUpPassword from "../../Layout/SetUpPasswordLayout";
// import image from "../../assets/Lock.svg";
// import { Link } from "react-router";
// import Input from "../../components/Input";
// import Button from "../../components/Button";
// import { FiEye } from "react-icons/fi";

// export default function SetPassword() {
//   return (
//     <SetUpPassword
//       image={image}
//       heading="Secure Your Access."
//       subHeading="Your health data is protected with industry-leading
// encryption. Step 3 of 3: finalize your security
// credentials."
//     >
//       <div className="w-full flex mx-30">
//         {/* Left Side */}
//         <form className="w-112.5 h-178.5 bg-white border border-[#D9D9D9] rounded-xl py-10 px-6 flex flex-col gap-6 shadow-sm">
//           <div className="flex flex-col">
//             <div className="flex flex-row">
//               {/* STEP 1 */}
//               <div className="flex gap-2">
//                 {/* Circle */}
//                 <div className="w-8 h-8 rounded-full bg-[#28574E] flex items-center justify-center">
//                   <p className="text-white text-[14px] font-bold">1</p>
//                 </div>
//                 <p className="font-outfit font-normal pt-2 text-[16px] leading-[100%] tracking-normal text-[#28574E]">
//                   Identity
//                 </p>
//               </div>
//               {/* Line */}
//               <div className="w-[45.5px] mt-4 mx-4 h-0.5 bg-[#28574E]"></div>
//               {/* OTP */}
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 rounded-full bg-[#28574E] flex items-center justify-center">
//                   <p className="text-white font-medium text-[14px] leading-[100%] tracking-[0%]">
//                     2
//                   </p>
//                 </div>
//                 <p className="text-[#28574E] font-outfit font-normal text-[16px] leading-[100%] tracking-[0%]">
//                   OTP
//                 </p>
//               </div>
//               <div className="w-10 h-0.5 mt-4 mx-4 bg-[#28574E]"></div>
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 rounded-full bg-[#28574E] flex items-center justify-center">
//                   <p className="text-white font-outfit font-medium text-[14px] leading-[100%] tracking-[0%]">
//                     3
//                   </p>
//                 </div>
//                 <p className="text-[#28574E] font-outfit font-light text-nowrap lg:text-base leading-none tracking-normal">
//                   Set Up
//                 </p>
//               </div>
//             </div>
//             {/* Form */}

//             {/* Main Content */}
//             <div className="flex flex-col gap-8 ">
//               {/* Header and SubHeader */}
//               <div className="flex flex-col gap-1.5 pt-10 ">
//                 <p className="font-medium text-[28px] leading-none tracking-normal">
//                   Set Up Password
//                 </p>
//                 <p className="font-outfit font-light text-[#757575] text-lg leading-none tracking-normal">
//                   finalise your security credentials.
//                 </p>
//               </div>
//               {/* Content */}
//               <div className="flex flex-col">
//                 <div className="flex flex-col gap-6">
//                   <div className="relative flex flex-col gap-2.5 ">
//                     <label
//                       htmlFor="Password"
//                       className="font-sans font-medium text-[#141313] text-[18px] leading-[100%]"
//                     >
//                       Password
//                     </label>
//                     <Input
//                       type="password"
//                       id="userId"
//                       className="rounded-lg py-4.5 px-3 flex gap-48.5 font-['Outfit'] font-normal text-base leading-none tracking-normal"
//                       placeholder="Enter your password"
//                     />
//                     <FiEye className="absolute top-1/2 right-4 -translate-y-1/2 mt-3" />
//                   </div>

//                   <div className="flex flex-col gap-6">
//                     <div className="relative  flex flex-col gap-2.5">
//                       <label
//                         htmlFor="Password"
//                         className="font-sans font-medium text-[#141313] text-[18px] leading-[100%]"
//                       >
//                         Confirm Password
//                       </label>
//                       <Input
//                         type="password"
//                         id="userId"
//                         className="rounded-lg py-4.5 px-3 flex gap-48.5 font-['Outfit'] font-normal text-base leading-none tracking-normal"
//                         placeholder="Enter your password"
//                       />
//                       <FiEye className="absolute top-1/2 right-4 -translate-y-1/2 mt-3" />
//                     </div>
//                     <div className="flex items-start my-2 justify-start gap-3.5 ">
//                       <input
//                         id="chckBox"
//                         type="checkbox"
//                         className=" my-1.5 w-5 h-5  accent-[#28574E]"
//                       />
//                       <p>
//                         I agree to the{" "}
//                         <Link to="/Client/src/Pages/ForgotPassword.tsx">
//                           <span className="text-[#28574e] text-[18px] font-medium">
//                             Terms of Service
//                           </span>
//                         </Link>{" "}
//                         and{" "}
//                         <Link to="/Client/src/Pages/ForgotPassword.tsx">
//                           <span className="text-[#28574e] text-[18px] font-medium">
//                             Privacy Policy.
//                           </span>
//                         </Link>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-20 ">
//                   <Link to="/AccountIsReady">
//                     <Button
//                       className="mt-8 text-white flex items-center justify-center"
//                       content="Activate Account"
//                       type="submit"
//                     />
//                   </Link>

//                   <div className="flex gap-2 items-center justify-center">
//                     <p className="gap-1 font-['Outfit'] font-normal text-[14px] leading-[100%] tracking-[0%] text-[#3F484A] text-center flex items-center justify-center">
//                       Need help ?
//                       <Link to="">
//                         <span className="text-[#28574E] font-outfit text-[14px] font-normal leading-[100%] tracking-normal text-center flex items-center justify-center">
//                           Contact Support
//                         </span>
//                       </Link>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//         {/* Footer */}
//       </div>
//     </SetUpPassword>
//   );
// }
