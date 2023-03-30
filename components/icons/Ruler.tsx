import * as React from "react";
import { SVGProps } from "react";
const SvgRuler = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 9 1.25 1.25m1.266-3.734 1.25 1.25M9 4l1.25 1.25m.875-3.5 3.125 3.125-9.375 9.375-3.125-3.125 9.375-9.375Z"
    />
  </svg>
);
export default SvgRuler;
