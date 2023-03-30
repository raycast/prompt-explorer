import * as React from "react";
import { SVGProps } from "react";
const SvgUppercase = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.167 9.75h5.666m-7.083 3.5L8 2.75l4.25 10.5"
    />
  </svg>
);
export default SvgUppercase;
