import * as React from "react";
import { SVGProps } from "react";
const SvgRacket = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 7.75c0 4 3 6.5 3 6.5s-2.75-3-6.5-3m-3-1L7.5 7.5m0 0 2.75-2.75M7.5 7.5l-2-2m2 2L10 10M2.75 8.25 5.5 5.5m0 0 2.75-2.75M5.5 5.5 3 3m-.068 5.64 1.427 1.428a4.036 4.036 0 1 0 5.709-5.709L8.64 2.932a4.036 4.036 0 0 0-5.708 5.709Z"
    />
  </svg>
);
export default SvgRacket;
