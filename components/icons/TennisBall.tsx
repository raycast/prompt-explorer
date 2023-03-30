import * as React from "react";
import { SVGProps } from "react";
const SvgTennisBall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 7.75A6.25 6.25 0 0 1 8.25 14M14 8.25A6.25 6.25 0 0 1 7.75 2m6.5 6a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
    />
  </svg>
);
export default SvgTennisBall;
