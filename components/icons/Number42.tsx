import * as React from "react";
import { SVGProps } from "react";
const SvgNumber42 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.25 10.25h-5.5l4-6.5v8.5M9.75 6a2.247 2.247 0 0 1 2.244-2.25c1.24 0 2.256 1 2.256 2.25 0 1-4.5 6.25-4.5 6.25h4.5"
    />
  </svg>
);
export default SvgNumber42;
