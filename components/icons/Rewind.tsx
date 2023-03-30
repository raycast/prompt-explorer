import * as React from "react";
import { SVGProps } from "react";
const SvgRewind = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.25 6 5-2.25v8.5l-5-2.25m0-6.25L1.75 8l7.5 4.25v-8.5Z"
    />
  </svg>
);
export default SvgRewind;
