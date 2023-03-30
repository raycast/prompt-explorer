import * as React from "react";
import { SVGProps } from "react";
const SvgNumber00 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 3.75A2.252 2.252 0 0 0 5.75 6v4a2.25 2.25 0 0 0 4.5 0V6c0-1.243-1.01-2.25-2.25-2.25Z"
    />
  </svg>
);
export default SvgNumber00;
