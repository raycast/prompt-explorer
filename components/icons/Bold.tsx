import * as React from "react";
import { SVGProps } from "react";
const SvgBold = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2}
      d="M4 8v4.5a1 1 0 0 0 1 1h4.25A2.75 2.75 0 0 0 12 10.75v0A2.75 2.75 0 0 0 9.25 8H4Zm0 0V3.5a1 1 0 0 1 1-1h3.25A2.75 2.75 0 0 1 11 5.25v0A2.75 2.75 0 0 1 8.25 8H4Z"
    />
  </svg>
);
export default SvgBold;
