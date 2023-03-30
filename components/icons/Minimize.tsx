import * as React from "react";
import { SVGProps } from "react";
const SvgMinimize = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.25 10.75h-1.5a2 2 0 0 0-2 2v1.5m-9-3.5h1.5a2 2 0 0 1 2 2v1.5m9-9h-1.5a2 2 0 0 1-2-2v-1.5m-9 3.5h1.5a2 2 0 0 0 2-2v-1.5"
    />
  </svg>
);
export default SvgMinimize;
