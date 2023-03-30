import * as React from "react";
import { SVGProps } from "react";
const SvgAirpods = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 6.25S1.75 6.25 1.75 4 3 1.75 3 1.75h.75a3 3 0 0 1 3 3v8.125c0 .76-.616 1.375-1.375 1.375v0c-.76 0-1.375-.616-1.375-1.375V6.25m-1 0h1m-1 0h1m9-4.5s1.25 0 1.25 2.25S13 6.25 13 6.25s0 0 0 0a1 1 0 0 0-1 1v5.625a1.375 1.375 0 1 1-2.75 0V4.75a3 3 0 0 1 3-3H13Z"
    />
  </svg>
);
export default SvgAirpods;
