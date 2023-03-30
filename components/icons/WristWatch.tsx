import * as React from "react";
import { SVGProps } from "react";
const SvgWristWatch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 16}
    height={props.height || 16}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.5 8h.75m-6.5 4v1.25a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1V12m-4.5-8V2.75a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1V4M8 8l.25-.25m-3.5 2.5v-4.5a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2Z"
    />
  </svg>
);
export default SvgWristWatch;
