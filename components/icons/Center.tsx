import * as React from "react";
import { SVGProps } from "react";
const SvgCenter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.125 1.75h1.125a2 2 0 0 1 2 2v1.125M4.875 1.75H3.75a2 2 0 0 0-2 2v1.125m0 6.25v1.125a2 2 0 0 0 2 2h1.125m6.25 0h1.125a2 2 0 0 0 2-2v-1.125M8 4.75v6.5M4.75 8h6.5"
    />
  </svg>
);
export default SvgCenter;
