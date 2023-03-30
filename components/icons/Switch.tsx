import * as React from "react";
import { SVGProps } from "react";
const SvgSwitch = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.75 9.75 2.5 2.25m0 0-2.5 2.25m2.5-2.25H2.75m2.5-10.25L2.75 4m0 0 2.5 2.25M2.75 4h10.5"
    />
  </svg>
);
export default SvgSwitch;
