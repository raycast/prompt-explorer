import * as React from "react";
import { SVGProps } from "react";
const SvgShuffle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.75 9.75 2.5 2.25m0 0-2.5 2.25m2.5-2.25h-3.681a4 4 0 0 1-3.767-2.655L6.346 8.07m5.404-6.32L14.25 4m0 0-2.5 2.25M14.25 4h-3.648A4 4 0 0 0 6.82 6.696L6.346 8.07m0 0-.148-.415A4 4 0 0 0 2.431 5H1.75m4.596 3.07-.166.484a4 4 0 0 1-3.782 2.696H1.75"
    />
  </svg>
);
export default SvgShuffle;
