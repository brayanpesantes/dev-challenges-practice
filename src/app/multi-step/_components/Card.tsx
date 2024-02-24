import cn from "@/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}
export default function Card({ children, className, ...rest }: Props) {
  return (
    <article
      {...rest}
      className={cn([
        "max-w-screen-sm md:w-[456px] h-auto md:h-[382px] bg-step-400 rounded-xl p-5 md:p-10 ring-1 ring-step-200",
        className,
      ])}
    >
      {children}
    </article>
  );
}
