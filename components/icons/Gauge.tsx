import * as React from "react";
import { SVGProps } from "react";
const SvgGauge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 12.25H3.678c-.64 0-1.247-.308-1.484-.902A6.344 6.344 0 0 1 1.75 9a6.25 6.25 0 1 1 12.5 0c0 .984-.22 1.787-.444 2.348-.237.594-.845.902-1.484.902H9.5m-1.116-1.44 1.866-4.06m-1 5.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
    />
  </svg>
);
export default SvgGauge;
