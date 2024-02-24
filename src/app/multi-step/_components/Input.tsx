import cn from "@/utils";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={cn([
        className,
        "w-full rounded-xl text-step-100 py-3 px-4 bg-transparent ring-2 ring-step-300 placeholder:text-step-200 focus:outline-none focus:ring-step-700 ",
      ])}
    />
  );
}
