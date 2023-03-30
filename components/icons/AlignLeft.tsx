import * as React from "react";
import { SVGProps } from "react";
const SvgAlignLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 1.75v12.5m4-10.5h2.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1Zm7.5 8.5h-7.5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h7.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1Z"
    />
  </svg>
);
export default SvgAlignLeft;
