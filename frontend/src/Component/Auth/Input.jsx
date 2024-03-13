import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div>
      {label && (
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black flex items-center gap-1">
            {label}
            <sup className="text-red-900">*</sup>
          </p>
        </label>
      )}
      <input
        type={type}
        className={`w-full rounded-[0.5rem] bg-gray-100 p-[12px] text-slate-900 border ${className}`}
        ref={ref}
        {...props}
        id={id}
        style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
      />
    </div>
  );
});

export default Input;