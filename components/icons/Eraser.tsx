import * as React from "react";
import { SVGProps } from "react";
const SvgEraser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.958 14.25h8.292m-8.292 0L1.75 10.118l7.83-7.786a2.002 2.002 0 0 1 2.831.01l1.262 1.27c.77.776.773 2.026.006 2.806L5.96 14.25Zm1.492-9.8 4.114 4.114"
    />
  </svg>
);
export default SvgEraser;
