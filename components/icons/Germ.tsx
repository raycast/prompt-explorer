import * as React from "react";
import { SVGProps } from "react";
const SvgGerm = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.25 2.75-1.5 1.5m-1 2.5v2.5m1 2.5 1.5 1.5m2.5 1h2.5m4-2.5-1.5 1.5m2.5-6.5v2.5m-2.5-6.5 1.5 1.5m-6.5-2.5h2.5M5.5 5.5 3.58 3.58M4.5 8H1.75m3.75 2.5-1.92 1.92M8 11.5v2.75m2.5-3.75 1.743 1.743M11.5 8H14m-3.5-2.5 1.743-1.743M8 4.5V2m3.25 6a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z"
    />
  </svg>
);
export default SvgGerm;
