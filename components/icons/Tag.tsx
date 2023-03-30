import * as React from "react";
import { SVGProps } from "react";
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 5h.01M7.824 1.75h4.426a2 2 0 0 1 2 2v4.426l-5.447 5.447a2.142 2.142 0 0 1-3.029 0l-3.397-3.397a2.142 2.142 0 0 1 0-3.03L7.824 1.75Z"
    />
  </svg>
);
export default SvgTag;
