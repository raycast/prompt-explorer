import * as React from "react";
import { SVGProps } from "react";
const SvgSunrise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.75 14.25h8.5M5.702 5.702A3.24 3.24 0 0 0 4.75 8v.25h-3m3.952-2.548A3.24 3.24 0 0 1 8 4.75m-2.298.952L3.581 3.58M8 4.75c.897 0 1.71.364 2.298.952M8 4.75v-3m2.298 3.952c.588.588.952 1.4.952 2.298v.25h3m-3.952-2.548 2.12-2.121M1.75 11.25h12.5"
    />
  </svg>
);
export default SvgSunrise;
