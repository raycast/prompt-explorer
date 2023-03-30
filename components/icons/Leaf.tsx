import * as React from "react";
import { SVGProps } from "react";
const SvgLeaf = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1.75 14.25 7.5-7.5m5-5h-2.5a8 8 0 0 0-8 8v2.5h2.5a8 8 0 0 0 8-8v-2.5Z"
    />
  </svg>
);
export default SvgLeaf;
