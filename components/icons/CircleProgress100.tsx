import * as React from "react";
import { SVGProps } from "react";
const SvgCircleProgress100 = (props: SVGProps<SVGSVGElement>) => (
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
    <circle
      cx={8}
      cy={8}
      r={4}
      fill="currentColor"
      transform="rotate(90 8 8)"
    />
  </svg>
);
export default SvgCircleProgress100;
