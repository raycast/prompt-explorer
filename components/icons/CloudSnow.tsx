import * as React from "react";
import { SVGProps } from "react";
const SvgCloudSnow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.353 11a2.75 2.75 0 0 1 .4-5.147 4.25 4.25 0 0 1 8.495 0A2.751 2.751 0 0 1 14.25 8.5V9m-7 4H6m0 0H4.75M6 13v1.25M6 13v-1.25m6.25-.75H11m0 0H9.75M11 11v1.25M11 11V9.75"
    />
  </svg>
);
export default SvgCloudSnow;
