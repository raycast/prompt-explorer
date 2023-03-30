import * as React from "react";
import { SVGProps } from "react";
const SvgFullSignal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 16}
    height={props.height || 16}
    {...props}
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.75 9.75v3.5h.5v-3.5h-.5ZM5.75 7.75v5.5h.5v-5.5h-.5ZM9.75 4.75v8.5h.5v-8.5h-.5ZM13.75 2.75v10.5h.5V2.75h-.5Z"
    />
  </svg>
);
export default SvgFullSignal;
