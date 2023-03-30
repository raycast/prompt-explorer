import * as React from "react";
import { SVGProps } from "react";
const SvgNumber10 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1.75 5.25 2.5-1.5v8.5m0 0h-2.5m2.5 0h2M12 3.75A2.252 2.252 0 0 0 9.75 6v4a2.25 2.25 0 1 0 4.5 0V6c0-1.243-1.01-2.25-2.25-2.25Z"
    />
  </svg>
);
export default SvgNumber10;
