import * as React from "react";
import { SVGProps } from "react";
const SvgWifiDisabled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 9.25s.205-.255.5-.5m6 .5S10.206 7.997 8.5 7.781m5.75-1.531S11.5 3.75 8 3.75c-.756 0-1.477.117-2.143.3M1.75 6.25s.266-.281 1-.75m2-2.75 7.5 10.5"
    />
  </svg>
);
export default SvgWifiDisabled;
