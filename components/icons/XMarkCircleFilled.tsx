import * as React from "react";
import { SVGProps } from "react";
const SvgXMarkCircleFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM6.28 5.22a.75.75 0 0 0-1.06 1.06L6.94 8 5.22 9.72a.75.75 0 1 0 1.06 1.06L8 9.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L9.06 8l1.72-1.72a.75.75 0 1 0-1.06-1.06L8 6.94 6.28 5.22Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgXMarkCircleFilled;
