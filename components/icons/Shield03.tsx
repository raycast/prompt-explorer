import * as React from "react";
import { SVGProps } from "react";
const SvgShield03 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 3.75S2.5 14.25 8 14.25s6.25-10.5 6.25-10.5-3.25-2-6.25-2-6.25 2-6.25 2Zm0 0L11 12.932M4.785 2.355l7.973 7.787"
    />
  </svg>
);
export default SvgShield03;
