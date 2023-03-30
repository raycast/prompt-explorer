import * as React from "react";
import { SVGProps } from "react";
const SvgPersonCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.5a5.5 5.5 0 0 0-4.52 8.635C4.67 10.039 6.32 9.5 8 9.5c1.681 0 3.33.54 4.52 1.635A5.5 5.5 0 0 0 8 2.5Zm3.504 9.74C10.64 11.443 9.384 11 8 11s-2.64.444-3.504 1.24A5.478 5.478 0 0 0 8 13.5a5.478 5.478 0 0 0 3.504-1.26ZM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5.5 6a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPersonCircle;
