import * as React from "react";
import { SVGProps } from "react";
const SvgGlasses = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.75 3.75 1.5 5.5V10m0 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0m-6.5-6.25-1.5 5.5V10m0 0a2.25 2.25 0 0 0 4.5 0m-4.5 0a2.25 2.25 0 0 1 4.5 0m0 0S6.5 8.75 8 8.75 9.75 10 9.75 10"
    />
  </svg>
);
export default SvgGlasses;
