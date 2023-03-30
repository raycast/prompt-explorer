import * as React from "react";
import { SVGProps } from "react";
const SvgEyeDropper = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.81 13.53-3.06.72.875-3.5h5.688L6.83 12.352a4 4 0 0 1-2.02 1.178Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.75 2.75 5.5 5.5M12 7l-5.181 5.397a4 4 0 0 1-1.97 1.124l-3.099.729.73-3.1a4 4 0 0 1 1.123-1.969L9 4m.35.35 2.125-2.124a1.626 1.626 0 0 1 2.299 2.3L11.65 6.65"
    />
  </svg>
);
export default SvgEyeDropper;
