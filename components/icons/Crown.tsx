import * as React from "react";
import { SVGProps } from "react";
const SvgCrown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 11.25v-8.5L5 6.25l3-3.5 3 3.5 3.25-3.5v8.5s-1.75 2-6.25 2-6.25-2-6.25-2Z"
    />
  </svg>
);
export default SvgCrown;
