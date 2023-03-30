import * as React from "react";
import { SVGProps } from "react";
const SvgPlayFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 16}
    height={props.height || 16}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-.844-9.88A.75.75 0 0 0 6 5.75v4.5a.75.75 0 0 0 1.156.63l3.5-2.25a.75.75 0 0 0 0-1.26l-3.5-2.25Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlayFilled;
