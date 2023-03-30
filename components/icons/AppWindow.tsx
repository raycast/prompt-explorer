import * as React from "react";
import { SVGProps } from "react";
const SvgAppWindow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.25 4.75v-1a2 2 0 0 0-2-2h-8.5a2 2 0 0 0-2 2v1m12.5 0v7.5a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2v-7.5m12.5 0H1.75"
    />
  </svg>
);
export default SvgAppWindow;
