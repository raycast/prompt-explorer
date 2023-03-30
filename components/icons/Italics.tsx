import * as React from "react";
import { SVGProps } from "react";
const SvgItalics = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.75 13.25h4.5m0-10.5L7 13.25m2.25-10.5h-2.5m2.5 0h2"
    />
  </svg>
);
export default SvgItalics;
