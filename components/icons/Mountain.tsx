import * as React from "react";
import { SVGProps } from "react";
const SvgMountain = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.217 5S9.5 6.25 8 6.25 5.783 5 5.783 5m1.967 9.25 2.39-4.012a1.004 1.004 0 0 1 1.72 0l2.39 4.012h-6.5Zm0 0h-6L6.211 4.018c.737-1.69 2.84-1.69 3.578 0L11.089 7"
    />
  </svg>
);
export default SvgMountain;
