import * as React from "react";
import { SVGProps } from "react";
const SvgAlarm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 1.75c1.5 0 1.5 1.5 1.5 1.5m-11-1.5c-1.5 0-1.5 1.5-1.5 1.5M8 5.75V8l1.25 1.25m-6.5 5 1.576-2.5m8.924 2.5-1.576-2.5M13.25 8a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
    />
  </svg>
);
export default SvgAlarm;
