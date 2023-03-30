import * as React from "react";
import { SVGProps } from "react";
const SvgHeartbeat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 8.75h1.5l2.75-7 2 12.5 3-8.5 1.75 3h1.5"
    />
  </svg>
);
export default SvgHeartbeat;
