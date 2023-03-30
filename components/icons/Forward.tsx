import * as React from "react";
import { SVGProps } from "react";
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6.75 6-5-2.25v8.5l5-2.25m0-6.25L14.25 8l-7.5 4.25v-8.5Z"
    />
  </svg>
);
export default SvgForward;
