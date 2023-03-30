import * as React from "react";
import { SVGProps } from "react";
const SvgRotateClockwise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.75 1.75 10.25 4m0 0-2.5 2.25M10.25 4H8C5.1 4 2.75 6.1 2.75 9a5.25 5.25 0 1 0 10.5 0"
    />
  </svg>
);
export default SvgRotateClockwise;
