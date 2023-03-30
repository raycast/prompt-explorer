import * as React from "react";
import { SVGProps } from "react";
const SvgHouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.75 7v6.25a1 1 0 0 0 1 1h8.5a1 1 0 0 0 1-1V7m1 1L8 1.75 1.75 8"
    />
  </svg>
);
export default SvgHouse;
