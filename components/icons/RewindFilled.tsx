import * as React from "react";
import { SVGProps } from "react";
const SvgRewindFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 16}
    height={props.height || 16}
    {...props}
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1.75 8 7.5-4.25v8.5L1.75 8ZM14.25 12.25v-8.5l-1.5 1v6.5l1.5 1Z"
    />
  </svg>
);
export default SvgRewindFilled;
