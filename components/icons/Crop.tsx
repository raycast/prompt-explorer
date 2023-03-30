import * as React from "react";
import { SVGProps } from "react";
const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 14.25v-8.5a1 1 0 0 0-1-1h-8.5m3-3v8.5a1 1 0 0 0 1 1h8.5"
    />
  </svg>
);
export default SvgCrop;
