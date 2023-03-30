import * as React from "react";
import { SVGProps } from "react";
const SvgArrowCounterClockwise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 9.75 4 12.25m0 0 2.25-2.5M4 12.25V8.875a5.125 5.125 0 1 1 10.25 0v3.375"
    />
  </svg>
);
export default SvgArrowCounterClockwise;
