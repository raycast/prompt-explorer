import * as React from "react";
import { SVGProps } from "react";
const SvgNumber01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5.75 5.25 2.5-1.5v8.5m0 0h-2.5m2.5 0h2"
    />
  </svg>
);
export default SvgNumber01;
