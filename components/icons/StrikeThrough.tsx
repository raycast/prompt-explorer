import * as React from "react";
import { SVGProps } from "react";
const SvgStrikeThrough = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.75 7.75s-3 .25-3-2.375C3.75 3.5 5.5 2.75 8 2.75s4.25 1 4.25 1m-10.5 4h12.5m-2.004 3c0 1.5-1.746 2.5-4.246 2.5-2.5 0-4.25-1-4.25-1"
    />
  </svg>
);
export default SvgStrikeThrough;
