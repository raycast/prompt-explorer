import * as React from "react";
import { SVGProps } from "react";
const SvgComputerChip = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.75 3.75h-1a1 1 0 0 0-1 1v1m2-2v-2m0 2h4.5m0 0h1a1 1 0 0 1 1 1v1m-2-2v-2m-4.5 12.5v-2m4.5 2v-2m2-6.5h2m-2 0v4.5m0 0v1a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-1m8.5 0h2m-10.5 0h-2m2 0v-4.5m0 0h-2"
    />
  </svg>
);
export default SvgComputerChip;
