import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const signupSubmit = (data) => {
    // Used after OTP Verification
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords not match");
      return;
    }
    const signUpData = {
      ...data,
      //   accountType,
    };

    console.log(signUpData);
    dispatch(setSignupData(signUpData));
    // Sending OTP to User
    // dispatch(sendOtp(signUpData.email, navigate));
    // toast.success("Otp Send")
  };
  return (
    <form
      onSubmit={handleSubmit(signupSubmit)}
      className="flex w-full flex-col gap-y-4 items-center justify-center h-[90vh]"
    >
      <div className="border p-4 shadow-2xl rounded-lg">
        <div className="flex gap-x-4">
          <Input
            label="First Name"
            placeholder="Enter first name"
            {...register("firstName", { required: true })}
          />
          <Input
            label="Last Name"
            placeholder="Enter last name"
            {...register("lastName", { required: true })}
          />
        </div>
        <Input
          label="Email"
          type="email"
          placeholder="Enter email address"
          {...register("email", { required: true })}
        />
        <div className="flex gap-x-4">
          <div className="relative">
            <Input
              label="Create Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
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
          <div className="relative">
            <Input
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              {...register("confirmPassword", { required: true })}
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-black shadow-lg"
        >
          Create Account
        </button>
      </div>
    </form>
  );
}

export default Signup;
