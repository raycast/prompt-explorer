import * as React from "react";
import { SVGProps } from "react";
const SvgMemoryStick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.75 4.75v-3h4.5v3m-6.5 0h8.5v7.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-7.5Z"
    />
  </svg>
);
export default SvgMemoryStick;
