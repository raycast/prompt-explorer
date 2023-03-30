import * as React from "react";
import { SVGProps } from "react";
const SvgReply = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.25 1.75 1.75 6m0 0 4.5 4.25M1.75 6h6.5a4 4 0 0 1 4 4v4.25"
    />
  </svg>
);
export default SvgReply;
