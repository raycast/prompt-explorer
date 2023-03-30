import * as React from "react";
import { SVGProps } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.75 5.5V5a3.25 3.25 0 1 1 6.5 0v.5m-6.5 8.75h6.5a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2h-6.5a2 2 0 0 0-2 2v4.5a2 2 0 0 0 2 2Z"
    />
  </svg>
);
export default SvgLock;
