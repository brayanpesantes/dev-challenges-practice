import { SVGProps } from "react";

export default function IconPause(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 19q-.825 0-1.412-.587T14 17V7q0-.825.588-1.412T16 5q.825 0 1.413.588T18 7v10q0 .825-.587 1.413T16 19m-8 0q-.825 0-1.412-.587T6 17V7q0-.825.588-1.412T8 5q.825 0 1.413.588T10 7v10q0 .825-.587 1.413T8 19"
      ></path>
    </svg>
  );
}
