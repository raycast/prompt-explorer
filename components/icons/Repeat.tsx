import * as React from "react";
import { SVGProps } from "react";
const SvgRepeat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.75 1.75 10.25 4m0 0-2.5 2.25M10.25 4h-4.5a4 4 0 0 0-4 4v1.25m6.5 5L5.75 12m0 0 2.5-2.25M5.75 12h4.5a4 4 0 0 0 4-4V6.75"
    />
  </svg>
);
export default SvgRepeat;
