import { useState } from "react";
import { useAuth } from "../Hooks/Auth/useAuth";
import AuthLayout from "../Layout/AuthLayout";
import Input from "../components/Inputs";
import { Link, useNavigate } from "react-router";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLogin } from "../Hooks/Auth/useLogin";
import { showToast } from "../utils/toastHelper";
import { Eye, EyeOff } from "lucide-react";

const loginSchema = z.object({
  UserId: z.string().min(4, "User ID must be at least 6 character"),
  password: z
    .string()
    .min(6, "Password must be at least 6 character")
    .max(12, "Password must be at most 12 character"),
});

type loginValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const { login, loading, error } = useLogin();
  const { login: loginUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: loginValues) => {
    try {
      const result = await login(data);

      // localStorage.setItem("authenticationToken", result.token);
      // localStorage.setItem("user", JSON.stringify(result.user));
      loginUser(result.token, result.user);

      showToast(result.message, "success");

      navigate("/");
    } catch (err: any) {
      console.log("Full error:", err);
      console.log("Response:", err.response);
      console.log("Response data:", err.response?.data, null, 2);

      showToast(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Login failed",
        "error",
      );
    }
    // catch (err) {
    //   console.log(err);
    //   showToast(error || "Login failed", "error");
    // }
  };
  // const onSubmit = (data: loginValues) => {
  //   console.log("Form Submitted :", data);
  //   navigate("/");
  // };
  return (
    <AuthLayout
      heading="Welcome Back"
      subHeading="Access your health records, appointment, and care team."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2.5">
        <label className="font-semibold text-[18px]" htmlFor="userId">
          Hospital Patient ID / User ID
        </label>
        <Input
          {...register("UserId")}
          type="text"
          id="userId"
          className="block my-2"
          placeholder="Enter your patient ID"
        />

        {errors.UserId && (
          <p className="text-red-500 text-sm">{errors.UserId.message}</p>
        )}

        <label className="font-semibold text-[18px]" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <Input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            id="password"
            className="block my-2"
            placeholder="Enter your password"
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
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <Link to="/ForgotPassword">
          <span className="text-[#28574e] text-[18px] font-medium">
            Forgot password?
          </span>
        </Link>
        <Button
          className="mt-8 flex items-center justify-center"
          content="Sign in"
          type="submit"
        />

        <p className="pt-5 text-center">
          First time here?
          <Link to="/Activate">
            <span className="text-[#28574e] font-medium">Activate Account</span>
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
