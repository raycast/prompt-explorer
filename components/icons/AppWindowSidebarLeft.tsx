import * as React from "react";
import { SVGProps } from "react";
const SvgAppWindowSidebarLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.25 1.75v12.5m-2.5 0h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2h-8.5a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2Z"
    />
  </svg>
);
export default SvgAppWindowSidebarLeft;
