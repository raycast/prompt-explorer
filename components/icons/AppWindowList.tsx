import * as React from "react";
import { SVGProps } from "react";
const SvgAppWindowList = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 5.25h12.5m-9.5 6h6.5m-6.5-3h6.5m-7.5 6h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2h-8.5a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2Z"
    />
  </svg>
);
export default SvgAppWindowList;
