import * as React from "react";
import { SVGProps } from "react";
const SvgCart = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2}
      d="M6 14h.01M11 14h.01"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.066 4.75H14.25l-1.566 5.088a2 2 0 0 1-1.911 1.412H6.55a2 2 0 0 1-1.99-1.79l-.623-5.92A2 2 0 0 0 1.95 1.75H1.75"
    />
  </svg>
);
export default SvgCart;
