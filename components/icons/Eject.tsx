import * as React from "react";
import { SVGProps } from "react";
const SvgEject = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.5 3 8h10L8 2.5ZM13 13.5H3V11h10v2.5Z"
    />
  </svg>
);
export default SvgEject;
