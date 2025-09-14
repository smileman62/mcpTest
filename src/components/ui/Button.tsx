"use client";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  full?: boolean;
};

export default function Button({ className, variant = "primary", full, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50";
  const variants = {
    primary: "bg-black text-white hover:bg-black/85",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900",
    ghost: "hover:bg-gray-100 text-gray-900",
  } as const;

  return (
    <button className={cn(base, variants[variant], full && "w-full", className)} {...props} />
  );
}