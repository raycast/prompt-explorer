import * as React from "react";
import { SVGProps } from "react";
const SvgStore = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.75 8h3.5m-6.5 0h.5m-1.5 3h8.5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-8.5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2ZM11.875 1.75h-7.75a.375.375 0 1 0 0 .75h7.75a.375.375 0 0 0 0-.75ZM11.875 14.25h-7.75a.375.375 0 0 1 0-.75h7.75a.375.375 0 0 1 0 .75Z"
    />
  </svg>
);
export default SvgStore;
