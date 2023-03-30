import * as React from "react";
import { SVGProps } from "react";
const SvgBathTub = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.75 12.75 1.5 1.5m-9-1.5-1.5 1.5m10.5-6.75v1.75a4 4 0 0 1-4 4h-2.5a4 4 0 0 1-4-4V7.5m-1-.75S4.5 8.25 8 8.25s6.25-1.5 6.25-1.5m-10.5.75V3.75a2 2 0 0 1 2-2h1.5"
    />
  </svg>
);
export default SvgBathTub;
