import * as React from "react";
import { SVGProps } from "react";
const SvgNumber04 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 10.25h-6.5l4.5-6.5v8.5"
    />
  </svg>
);
export default SvgNumber04;
