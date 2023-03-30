import * as React from "react";
import { SVGProps } from "react";
const SvgCloudRain = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.25 10c-.281-.431-.5-.947-.5-1.5 0-1.26.847-2.322 2.002-2.647a4.25 4.25 0 0 1 8.496 0A2.751 2.751 0 0 1 13.805 10l-.18.25m-8.708.5-1.167 3.5m4.334-3.5-1.167 3.5m4.334-3.5-1.167 3.5"
    />
  </svg>
);
export default SvgCloudRain;
