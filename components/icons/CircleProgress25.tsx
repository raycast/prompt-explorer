import * as React from "react";
import { SVGProps } from "react";
const SvgCircleProgress25 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 4.5c0-.276.225-.503.499-.469a4 4 0 0 1 3.47 3.47c.034.274-.193.499-.469.499h-3a.5.5 0 0 1-.5-.5v-3Z"
    />
  </svg>
);
export default SvgCircleProgress25;
