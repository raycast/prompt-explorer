import * as React from "react";
import { SVGProps } from "react";
const SvgTextCursor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.25 1.75h-.388a1 1 0 0 0-.64.232L8 3M5.75 1.75h.388a1 1 0 0 1 .64.232L8 3m0 0v10m0 0-1.222 1.018a1 1 0 0 1-.64.232H5.75M8 13l1.222 1.018a1 1 0 0 0 .64.232h.388"
    />
  </svg>
);
export default SvgTextCursor;
