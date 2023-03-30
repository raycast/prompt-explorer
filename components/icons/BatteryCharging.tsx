import * as React from "react";
import { SVGProps } from "react";
const SvgBatteryCharging = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.25 5.75 5.75 8h2.5l-1.5 2.25m5.75-3.5h.5a1.25 1.25 0 1 1 0 2.5h-.5m-8.75-5.5h6.5a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-4.5a2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgBatteryCharging;
