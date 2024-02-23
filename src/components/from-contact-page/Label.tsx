import cn from "@/utils";
import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
export default function Label({ children, className, ...rest }: LabelProps) {
  return (
    <label
      {...rest}
      className={cn("text-white font-medium text-sm", className)}
    >
      {children}
    </label>
  );
}
