import * as React from "react";
import { SVGProps } from "react";
const SvgArrowRightCircleFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm1.252 4.193a.75.75 0 1 0-1.004 1.114l1.048.943H4.75a.75.75 0 0 0 0 1.5h4.546l-1.048.943a.75.75 0 1 0 1.004 1.114l2.5-2.25a.75.75 0 0 0 0-1.114l-2.5-2.25Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRightCircleFilled;
