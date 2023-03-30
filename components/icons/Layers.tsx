import * as React from "react";
import { SVGProps } from "react";
const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.39 8.204 1.75 10 8 14.25 14.25 10l-2.64-1.796M8 1.75 14.25 6 8 10.25 1.75 6 8 1.75Z"
    />
  </svg>
);
export default SvgLayers;
