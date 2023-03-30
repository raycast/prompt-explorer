import * as React from "react";
import { SVGProps } from "react";
const SvgAirplaneTakeoff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.673 3.471 1.341-.46c.865-.296 1.82.124 2.135.939.315.814-.131 1.716-.995 2.012l-2.236.767-1.136 2.927c-.214.431-.6.765-1.074.928l-1.942.666.575-3.293-3.8 1.304L1.75 4.624l.907-.311a1.99 1.99 0 0 1 1.96.383l.69.617 2.683-.92m2.683-.922-.591-.702c-.764-.908-2.059-1.253-3.213-.857l-.75.258L7.99 4.392m2.683-.92-2.683.92M1.75 14.25h12.5"
    />
  </svg>
);
export default SvgAirplaneTakeoff;
