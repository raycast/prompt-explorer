import * as React from "react";
import { SVGProps } from "react";
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2}
      d="M8 6v2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.771 3.128c.919-1.837 3.54-1.837 4.458 0l3.755 7.514c.828 1.658-.377 3.608-2.229 3.608h-7.51c-1.852 0-3.057-1.95-2.229-3.608l3.755-7.514Z"
    />
  </svg>
);
export default SvgWarning;
