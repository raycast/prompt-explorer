import * as React from "react";
import { SVGProps } from "react";
const SvgArrowRightCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.75 5.75 11.25 8m0 0-2.5 2.25M11.25 8h-6.5m9.5 0a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
    />
  </svg>
);
export default SvgArrowRightCircle;
