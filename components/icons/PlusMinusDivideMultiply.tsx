import * as React from "react";
import { SVGProps } from "react";
const SvgPlusMinusDivideMultiply = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M4 1.75V4m0 2.25V4m0 0H1.75M4 4h2.25M12 12l2-2m-2 2-2 2m2-2 2 2m-2-2-2-2M9.75 4h4.5M1.75 12h4.5"
    />
    <circle cx={4} cy={9.75} r={0.75} fill="currentColor" />
    <circle cx={4} cy={14.25} r={0.75} fill="currentColor" />
  </svg>
);
export default SvgPlusMinusDivideMultiply;
