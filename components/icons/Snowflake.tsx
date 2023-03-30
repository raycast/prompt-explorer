import * as React from "react";
import { SVGProps } from "react";
const SvgSnowflake = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.25 13.25 8 10.75l-2.25 2.5m7.5-7.5L10.75 8m0 0 2.5 2.25M10.75 8h3.5m-3.5 0H8m2.25-5.25L8 5.25m0 0-2.25-2.5M8 5.25v-3.5m0 3.5V8M2.75 5.75 5.25 8m0 0-2.5 2.25M5.25 8H8M5.25 8h-3.5M8 8v6.25"
    />
  </svg>
);
export default SvgSnowflake;
