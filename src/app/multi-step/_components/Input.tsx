import cn from "@/utils";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export default function Input({ className }: InputProps) {
  return (
    <input
      className={cn([
        className,
        "w-full rounded-xl py-3 px-4 bg-transparent ring-2 ring-step-300 text-step-200 focus:outline-none focus:ring-step-200",
      ])}
    />
  );
}
