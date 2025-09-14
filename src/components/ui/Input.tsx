"use client";
import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/50",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
export default Input;