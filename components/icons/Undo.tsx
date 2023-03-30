import * as React from "react";
import { SVGProps } from "react";
const SvgUndo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.25 2.75 3.75 5m0 0 2.5 2.25M3.75 5h4.5a4 4 0 0 1 4 4v.25a4 4 0 0 1-4 4h-4.5"
    />
  </svg>
);
export default SvgUndo;
