import * as React from "react";
import { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.75 7.25h6.5m-6.5-3v-2.5m6.5 2.5v-2.5m-7.5 12.5h8.5a2 2 0 0 0 2-2v-7.5a2 2 0 0 0-2-2h-8.5a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2Z"
    />
  </svg>
);
export default SvgCalendar;
