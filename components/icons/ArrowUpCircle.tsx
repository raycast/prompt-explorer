import * as React from "react";
import { SVGProps } from "react";
const SvgArrowUpCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.75 7.25 8 4.75m0 0 2.25 2.5M8 4.75v6.5m0-9.5a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5Z"
    />
  </svg>
);
export default SvgArrowUpCircle;
