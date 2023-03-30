import * as React from "react";
import { SVGProps } from "react";
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 10.25v-8.5m0 8.5 3.25-3.5M8 10.25l-3.25-3.5m-3 5v.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-.5"
    />
  </svg>
);
export default SvgDownload;
