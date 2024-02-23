import cn from "@/utils";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={cn(
        "p-6 w-full text-base rounded-xl text-from-contact-300 placeholder:text-from-contact-300/50 font-medium focus:outline-none focus:ring-2 focus:ring-from-contact-400",
        className
      )}
    />
  );
}
