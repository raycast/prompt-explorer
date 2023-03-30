import * as React from "react";
import { SVGProps } from "react";
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.75 14.25h3l1.5-1.563V11.25h1.5l2-2h.75A3.75 3.75 0 1 0 6.75 5.5v.75l-3.828 3.828a4 4 0 0 0-1.172 2.829v1.343Z"
    />
  </svg>
);
export default SvgKey;
