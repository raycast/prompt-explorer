import * as React from "react";
import { SVGProps } from "react";
const SvgCircleProgress50 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 4.5c0-.276.225-.503.499-.469a4 4 0 0 1 0 7.938C8.225 12.003 8 11.776 8 11.5v-7Z"
    />
  </svg>
);
export default SvgCircleProgress50;
