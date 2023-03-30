import * as React from "react";
import { SVGProps } from "react";
const SvgFilmStrip = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.25 1.75v12.5m-4.5-12.5v12.5m-3-9.5h3M2.75 8h3m-3 3.25h3m4.5 0h3m-3-3.25h3m-3-3.25h3m-1-3h-8.5a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h8.5a1 1 0 0 0 1-1V2.75a1 1 0 0 0-1-1Z"
    />
  </svg>
);
export default SvgFilmStrip;
