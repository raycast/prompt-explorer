import * as React from "react";
import { SVGProps } from "react";
const SvgHourglass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.75 1.75h10.5m-10.5 12.5h10.5M8 7.75A4.25 4.25 0 0 1 3.75 3.5V1.75h8.5V3.5A4.25 4.25 0 0 1 8 7.75Zm0 0A4.25 4.25 0 0 0 3.75 12v2.25h8.5V12A4.25 4.25 0 0 0 8 7.75Z"
    />
  </svg>
);
export default SvgHourglass;
