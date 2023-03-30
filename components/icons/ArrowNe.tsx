import * as React from "react";
import { SVGProps } from "react";
const SvgArrowNe = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.25 3.75h6m0 0v6m0-6-8.5 8.5"
    />
  </svg>
);
export default SvgArrowNe;
