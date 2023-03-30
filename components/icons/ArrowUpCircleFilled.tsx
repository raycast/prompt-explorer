import * as React from "react";
import { SVGProps } from "react";
const SvgArrowUpCircleFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM5.193 6.748a.75.75 0 1 0 1.114 1.004l.943-1.048v4.546a.75.75 0 0 0 1.5 0V6.704l.943 1.048a.75.75 0 1 0 1.114-1.004l-2.25-2.5a.75.75 0 0 0-1.114 0l-2.25 2.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpCircleFilled;
