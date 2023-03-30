import * as React from "react";
import { SVGProps } from "react";
const SvgMultiply = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.75 4.75 6.5 6.5m0-6.5-6.5 6.5"
    />
  </svg>
);
export default SvgMultiply;
