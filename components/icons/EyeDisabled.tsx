import * as React from "react";
import { SVGProps } from "react";
const SvgEyeDisabled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 11.626C13.466 10.314 14.25 8.59 14.25 8 14.25 7 12 2.75 8 2.75c-1.406 0-2.596.525-3.548 1.25M2.25 6.75s-.5.75-.5 1.25C1.75 9 4 13.25 8 13.25c.347 0 .93-.032 1.25-.09M1.75 1.75l12.5 12.5M6.637 6.21a2.25 2.25 0 0 1 3.165 3.138"
    />
  </svg>
);
export default SvgEyeDisabled;
