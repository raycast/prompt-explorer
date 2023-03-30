import * as React from "react";
import { SVGProps } from "react";
const SvgCricketBall = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.75 11.75.5.5m-2.5-2.5.5.5m-2.5-2.5.5.5m-2.5-2.5.5.5m-2.5-2.5.5.5m10 3.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
    />
  </svg>
);
export default SvgCricketBall;
