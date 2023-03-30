import * as React from "react";
import { SVGProps } from "react";
const SvgCoin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 6v4c0 1.243 2.798 2.25 6.25 2.25s6.25-1.007 6.25-2.25V6M1.75 6c0 1.243 2.798 2.25 6.25 2.25S14.25 7.243 14.25 6M1.75 6c0-1.243 2.798-2.25 6.25-2.25S14.25 4.757 14.25 6"
    />
  </svg>
);
export default SvgCoin;
