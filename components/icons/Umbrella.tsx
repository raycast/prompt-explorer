import * as React from "react";
import { SVGProps } from "react";
const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 8.25v4.375a1.625 1.625 0 1 1-3.25 0v-.875M8 1.75c5.5 0 6.25 6.5 6.25 6.5S13 7 11 7 8 8.25 8 8.25 7 7 5 7 1.75 8.25 1.75 8.25 2.5 1.75 8 1.75Z"
    />
  </svg>
);
export default SvgUmbrella;
