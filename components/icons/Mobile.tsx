import * as React from "react";
import { SVGProps } from "react";
const SvgMobile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.75 4.25h.5m2.5 10h-5.5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2Z"
    />
  </svg>
);
export default SvgMobile;
