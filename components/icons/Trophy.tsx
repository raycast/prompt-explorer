import * as React from "react";
import { SVGProps } from "react";
const SvgTrophy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.75 14.25h6.5m-3.25-3v3m0-3A3.25 3.25 0 0 1 4.75 8V1.75h6.5V8A3.25 3.25 0 0 1 8 11.25Zm-3.25-7.5h-3v2.5a2 2 0 0 0 2 2h1.01m6.49-4.5h3v2.5a2 2 0 0 1-2 2h-1.01"
    />
  </svg>
);
export default SvgTrophy;
