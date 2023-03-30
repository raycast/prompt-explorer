import * as React from "react";
import { SVGProps } from "react";
const SvgAmericanFootball = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 14.25v-.75A2.5 2.5 0 0 0 2.5 11h-.75m9-9v.75a2.5 2.5 0 0 0 2.5 2.5H14m-8.25 3.5 1.5 1.5m1.5-4.5 1.5 1.5m-1-.5-2.5 2.5m7.5-6.5v3.5a8 8 0 0 1-8 8h-3.5a1 1 0 0 1-1-1v-3.5a8 8 0 0 1 8-8h3.5a1 1 0 0 1 1 1Z"
    />
  </svg>
);
export default SvgAmericanFootball;
