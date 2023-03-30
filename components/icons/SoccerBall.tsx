import * as React from "react";
import { SVGProps } from "react";
const SvgSoccerBall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 1.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5Zm0 0V5m0 0L5.25 6.75M8 5l2.75 1.75m-5.5 0 .5 3.5m-.5-3.5L2.077 6m3.673 4.25L4.5 13.179m1.25-2.929h4.5m0 0 .5-3.5m-.5 3.5 1.25 2.929m-.75-6.429L13.923 6"
    />
  </svg>
);
export default SvgSoccerBall;
