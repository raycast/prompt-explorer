import * as React from "react";
import { SVGProps } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.324 3.324 3.352 3.352m-6.746 6.59 7.595-7.419c.95-.928.958-2.452.02-3.391v0a2.384 2.384 0 0 0-3.392.02l-7.42 7.594-.983 4.18 4.18-.983Z"
    />
  </svg>
);
export default SvgPencil;
