import * as React from "react";
import { SVGProps } from "react";
const SvgShield02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 14.25s6.25-.25 6.25-12.5c0 0-1.802 1.5-3.25 1.5-1.45 0-3-1.5-3-1.5s-1.551 1.5-3 1.5c-1.45 0-3.25-1.5-3.25-1.5C1.75 14 8 14.25 8 14.25Z"
    />
  </svg>
);
export default SvgShield02;
