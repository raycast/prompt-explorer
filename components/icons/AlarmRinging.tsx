import * as React from "react";
import { SVGProps } from "react";
const SvgAlarmRinging = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.25 1.75c-1.5 0-1.5 1.5-1.5 1.5m11-1.5c1.5 0 1.5 1.5 1.5 1.5m-8.5 8h-4l2-3.25V6a4.25 4.25 0 0 1 8.5 0v2l2 3.25h-4m-4.5 0V12a2.25 2.25 0 0 0 4.5 0v-.75m-4.5 0h4.5"
    />
  </svg>
);
export default SvgAlarmRinging;
