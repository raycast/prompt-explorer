import * as React from "react";
import { SVGProps } from "react";
const SvgWifi = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 9.25S6 7.75 8 7.75s3.25 1.5 3.25 1.5m3-3S11.5 3.75 8 3.75s-6.25 2.5-6.25 2.5"
    />
  </svg>
);
export default SvgWifi;
