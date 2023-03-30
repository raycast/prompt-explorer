import * as React from "react";
import { SVGProps } from "react";
const SvgDna = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 11.75H1.75M6.5 6.5l3 3m-5.75 4.75v-3.73a4 4 0 0 1 1.31-2.96l4.19-3.81m5 .5h-1.5m-.5-2.5v3.73a4 4 0 0 1-1.31 2.96l-4.19 3.81"
    />
  </svg>
);
export default SvgDna;
