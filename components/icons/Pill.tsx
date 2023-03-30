import * as React from "react";
import { SVGProps } from "react";
const SvgPill = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 6 4 4m-2.478 3.26 5.738-5.738A3.381 3.381 0 1 0 8.478 2.74L2.74 8.478a3.381 3.381 0 1 0 4.782 4.782Z"
    />
  </svg>
);
export default SvgPill;
