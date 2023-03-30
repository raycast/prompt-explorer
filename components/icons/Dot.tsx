import * as React from "react";
import { SVGProps } from "react";
const SvgDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 16}
    height={props.height || 16}
    {...props}
  >
    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);
export default SvgDot;
