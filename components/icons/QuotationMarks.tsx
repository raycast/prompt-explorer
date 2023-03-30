import * as React from "react";
import { SVGProps } from "react";
const SvgQuotationMarks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 16}
    height={props.height || 16}
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.25 8.75h-2.5v2.5a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1ZM12.25 8.75h-2.5v2.5a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.75 8.75h2.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-2.5Zm0 0c0-2.75 1.25-5 4-5h.5m3.5 5h2.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-2.5Zm0 0c0-2.75 1.25-5 4-5h.5"
    />
  </svg>
);
export default SvgQuotationMarks;
