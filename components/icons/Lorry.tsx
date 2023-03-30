import * as React from "react";
import { SVGProps } from "react";
const SvgLorry = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.25 5.75h2a2 2 0 0 1 2 2v3.5H13m-2.75 0v-7.5a1 1 0 0 0-1-1h-6.5a1 1 0 0 0-1 1v7.5H4m6.25 0H6m4.25 0H11m0 0a1.25 1.25 0 1 0 2 1.5 1.25 1.25 0 0 0-2-1.5ZM6.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
    />
  </svg>
);
export default SvgLorry;
