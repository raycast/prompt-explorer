import * as React from "react";
import { SVGProps } from "react";
const SvgHeartDisabled = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1.75 1.75 12.5 12.5m-6.25-1S3.232 9.464 2.275 7.933A3.482 3.482 0 0 1 1.751 6v-.25M3.5 3.09c1.386-.727 3.095-.263 3.975 1.145L8 5.25l.525-1.015c.957-1.532 2.897-1.946 4.333-.925 1.436 1.021 1.824 3.09.867 4.623-.419.67-1.566 1.77-2.725 2.797"
    />
  </svg>
);
export default SvgHeartDisabled;
