import * as React from "react";
import { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2.75 3.75 1.04 8.736a2 2 0 0 0 1.986 1.764h4.448a2 2 0 0 0 1.986-1.764l1.04-8.736m1 .005H9.5m0 0h-3m3 0c0-1.16-.372-1.992-1.5-1.992-1 0-1.5.832-1.5 1.992m0 0H1.75M6.5 7v4m3-4v4"
    />
  </svg>
);
export default SvgTrash;
