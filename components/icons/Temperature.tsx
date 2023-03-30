import * as React from "react";
import { SVGProps } from "react";
const SvgTemperature = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.75 2.75h.5m-.5 3h.5m-7-2.25a1.75 1.75 0 1 1 3.5 0v4.76a3.25 3.25 0 1 1-3.5 0V3.5Z"
    />
  </svg>
);
export default SvgTemperature;
