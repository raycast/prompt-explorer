import * as React from "react";
import { SVGProps } from "react";
const SvgAtSymbol = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.25 14.25c-3.75 0-6.5-2.798-6.5-6.25A6.25 6.25 0 0 1 8 1.75c5 0 6.25 3.25 6.25 6.25v.25a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v-2.5m0 2.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
  </svg>
);
export default SvgAtSymbol;
