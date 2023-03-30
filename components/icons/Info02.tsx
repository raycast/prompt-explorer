import * as React from "react";
import { SVGProps } from "react";
const SvgInfo02 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2}
      d="M8 8v3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
    <rect
      width={12.5}
      height={12.5}
      x={1.75}
      y={1.75}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={4}
    />
  </svg>
);
export default SvgInfo02;
