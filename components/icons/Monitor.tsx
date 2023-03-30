import * as React from "react";
import { SVGProps } from "react";
const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.75 1.75h8.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2ZM6.5 10.75h3v3.496h-3V10.75ZM10 14.246H6"
    />
  </svg>
);
export default SvgMonitor;
