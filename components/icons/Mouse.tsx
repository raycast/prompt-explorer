import * as React from "react";
import { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 1.75H5.75a2 2 0 0 0-2 2v6.5a4 4 0 0 0 4 4h.5a4 4 0 0 0 4-4v-6.5a2 2 0 0 0-2-2H8Zm0 0v2.5"
    />
  </svg>
);
export default SvgMouse;
