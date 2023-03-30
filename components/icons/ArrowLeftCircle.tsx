import * as React from "react";
import { SVGProps } from "react";
const SvgArrowLeftCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.25 10.25 4.75 8m0 0 2.5-2.25M4.75 8h6.5m-9.5 0a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z"
    />
  </svg>
);
export default SvgArrowLeftCircle;
