import * as React from "react";
import { SVGProps } from "react";
const SvgCircleProgress75 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 4.5c0-.276.225-.503.499-.469A4 4 0 1 1 4.03 8.5C3.997 8.225 4.224 8 4.5 8h3a.5.5 0 0 0 .5-.5v-3Z"
    />
  </svg>
);
export default SvgCircleProgress75;
