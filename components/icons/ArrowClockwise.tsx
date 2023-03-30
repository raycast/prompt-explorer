import * as React from "react";
import { SVGProps } from "react";
const SvgArrowClockwise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.25 9.75 12 12.25m0 0-2.25-2.5m2.25 2.5V8.875a5.125 5.125 0 1 0-10.25 0v3.375"
    />
  </svg>
);
export default SvgArrowClockwise;
