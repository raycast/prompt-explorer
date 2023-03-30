import * as React from "react";
import { SVGProps } from "react";
const SvgPower = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 16}
    height={props.height || 16}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#power_svg__a)"
    >
      <path d="M3.58 3.58a6.25 6.25 0 1 0 8.84 0M8 7.163V1.75" />
    </g>
    <defs>
      <clipPath id="power_svg__a">
        <rect fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPower;
