import * as React from "react";
import { SVGProps } from "react";
const SvgQuestionMarkCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 6.25v0c0-.966.784-1.75 1.75-1.75v0c.966 0 1.75.784 1.75 1.75v.125c0 1.036-.84 1.875-1.875 1.875H8V9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 11.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
    <circle
      cx={8}
      cy={8}
      r={6.25}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgQuestionMarkCircle;
