import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Input from "./Input";
import { login } from "../../Services/Auth/AuthApi";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const loginSubmit = async (e) => {
    try {
      console.log(e);
      dispatch(login(e.email, e.password, navigate));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <form
        onSubmit={handleSubmit(loginSubmit)}
        className="p-8 rounded-lg mt-6 flex w-[50vw] flex-col gap-y-4 border"
      >
        {/* Email Input Field */}
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter Email Address"
          {...register("email", { required: true })}
        />
        {/* Password Input Field */}
        <div className="relative">
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            {...register("password", { required: true })}
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </div>
        {/* Forget Password */}
        <Link to="/forget-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
            Forgot Password
          </p>
        </Link>
        {/* Sign In Button */}
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
