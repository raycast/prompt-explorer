import * as React from "react";
import { SVGProps } from "react";
const SvgSwatch = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.75 4.25 2.5-2.5 3 3-5.5 5.5M2 9.75h4m-4-4h4m-4.25-4h4.5v10.5a2 2 0 0 1-2 2h-.5a2 2 0 0 1-2-2V1.75Z"
    />
  </svg>
);
export default SvgSwatch;
