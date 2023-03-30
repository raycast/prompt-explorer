import * as React from "react";
import { SVGProps } from "react";
const SvgAppWindowGrid2X2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.75 1.75h8.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 5h1.5v1.5H5V5Zm0 4.5h1.5V11H5V9.5ZM9.5 5H11v1.5H9.5V5Zm0 4.5H11V11H9.5V9.5Z"
    />
  </svg>
);
export default SvgAppWindowGrid2X2;
