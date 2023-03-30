import * as React from "react";
import { SVGProps } from "react";
const SvgFountainTip = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 1.75v7.5m0-7.5L3.091 8.821A1.866 1.866 0 0 0 3.2 11.11l2.62 3.14h4.363l2.62-3.14c.555-.667.598-1.58.107-2.289L8 1.75Z"
    />
  </svg>
);
export default SvgFountainTip;
