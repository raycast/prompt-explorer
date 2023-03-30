import * as React from "react";
import { SVGProps } from "react";
const SvgExclamationmark3 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2}
      d="M3.499 1.998V10M8 1.998V10M12.501 1.998V10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.999 13.998a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8.5 13.998a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM13.001 13.998a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </svg>
);
export default SvgExclamationmark3;
