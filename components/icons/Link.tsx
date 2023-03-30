import * as React from "react";
import { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.25 7.75 2.539 9.654a2.692 2.692 0 1 0 3.807 3.807L8.25 11.75m3.5-3.5 1.711-1.904A2.692 2.692 0 1 0 9.654 2.54L7.75 4.25m-1 5 2.5-2.5"
    />
  </svg>
);
export default SvgLink;
