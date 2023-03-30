import * as React from "react";
import { SVGProps } from "react";
const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.25 12.25v-8.5a2 2 0 0 0-2-2h-6.5a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h6.5a2 2 0 0 0 2-2Z"
    />
    <path
      fill="currentColor"
      d="M4.75 6.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5ZM4.75 9a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V9ZM4.75 11.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5ZM7.25 6.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5ZM7.25 9a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V9ZM7.25 11.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5ZM9.75 6.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5ZM9.75 9a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V9Z"
    />
  </svg>
);
export default SvgCalculator;
