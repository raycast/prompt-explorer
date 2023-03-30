import * as React from "react";
import { SVGProps } from "react";
const SvgXMarkCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.25 5.75 8 8m0 0-2.25 2.25M8 8 5.75 5.75M8 8l2.25 2.25m4-2.25a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
    />
  </svg>
);
export default SvgXMarkCircle;
