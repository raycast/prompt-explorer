import * as React from "react";
import { SVGProps } from "react";
const SvgTree = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 12.25v2m4.25-6L8 1.75l-4.25 6.5h1.5l-2.5 4h10.5l-2.5-4h1.5Z"
    />
  </svg>
);
export default SvgTree;
