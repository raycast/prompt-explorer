import * as React from "react";
import { SVGProps } from "react";
const SvgSyringe = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 5.5 13 3m-2.5 2.5L8 3m2.5 2.5L13 8m-1.25-6.25 2.5 2.5M12 7l-5.404 5.597a2.258 2.258 0 0 1-3.221.028M9 4 3.403 9.404a2.258 2.258 0 0 0-.028 3.221m0 0L1.75 14.25"
    />
  </svg>
);
export default SvgSyringe;
