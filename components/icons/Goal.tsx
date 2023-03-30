import * as React from "react";
import { SVGProps } from "react";
const SvgGoal = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.25 2.75-1.67 2.172a4 4 0 0 0-.83 2.438v2.89m2.5-7.5H1.75m12.5 0v10.5l-2.5-3m0 0h-7.5m-2.5-7.5 1.7 2.183a4 4 0 0 1 .8 2.4v2.917m-2.5-7.5v10.5l2.5-3"
    />
  </svg>
);
export default SvgGoal;
