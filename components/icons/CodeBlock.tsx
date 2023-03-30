import * as React from "react";
import { SVGProps } from "react";
const SvgCodeBlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.25 2.75 1.75 4l1.5 1.25m3.5-2.5L8.25 4l-1.5 1.25m-5 3.5v3.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2h-.5"
    />
  </svg>
);
export default SvgCodeBlock;
