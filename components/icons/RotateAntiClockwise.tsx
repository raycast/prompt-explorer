import * as React from "react";
import { SVGProps } from "react";
const SvgRotateAntiClockwise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.25 1.75 5.75 4m0 0 2.5 2.25M5.75 4H8c2.9 0 5.25 2.1 5.25 5a5.25 5.25 0 1 1-10.5 0"
    />
  </svg>
);
export default SvgRotateAntiClockwise;
