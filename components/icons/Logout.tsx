import * as React from "react";
import { SVGProps } from "react";
const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.75 4.75 14.25 8m0 0-3.5 3.25M14.25 8h-8.5m-1.5 6.25h-.5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2h.5"
    />
  </svg>
);
export default SvgLogout;
