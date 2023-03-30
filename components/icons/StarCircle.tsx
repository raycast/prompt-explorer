import * as React from "react";
import { SVGProps } from "react";
const SvgStarCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 16}
    height={props.height || 16}
    {...props}
  >
    <circle
      cx={8}
      cy={8}
      r={6.25}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 4.75.73 2.246h2.36L9.18 8.384l.73 2.245L8 9.241 6.09 10.63l.73-2.245-1.91-1.388h2.36L8 4.75Z"
    />
  </svg>
);
export default SvgStarCircle;
