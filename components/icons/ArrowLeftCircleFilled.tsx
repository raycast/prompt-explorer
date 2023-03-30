import * as React from "react";
import { SVGProps } from "react";
const SvgArrowLeftCircleFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-1.252 9.807a.75.75 0 0 0 1.004-1.114L6.704 8.75h4.546a.75.75 0 0 0 0-1.5H6.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeftCircleFilled;
