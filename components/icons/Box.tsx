import * as React from "react";
import { SVGProps } from "react";
const SvgBox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.75 5 8 1.75 13.25 5M2.75 5 8 8.25M2.75 5v6L8 14.25M13.25 5 8 8.25M13.25 5v6L8 14.25m0-6v6"
    />
  </svg>
);
export default SvgBox;
