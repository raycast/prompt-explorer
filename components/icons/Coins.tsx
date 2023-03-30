import * as React from "react";
import { SVGProps } from "react";
const SvgCoins = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 9v3c0 1.243 1.903 2.25 4.25 2.25s4.25-1.007 4.25-2.25V9m-8.5 0c0 1.243 1.903 2.25 4.25 2.25s4.25-1.007 4.25-2.25m-8.5 0c0-1.243 1.903-2.25 4.25-2.25S10.25 7.757 10.25 9m-4.5-5c0-1.243 1.903-2.25 4.25-2.25S14.25 2.757 14.25 4m0 0c0 .86-.911 1.607-2.25 1.986M14.25 4v3c0 .623-.728 1.343-1.5 1.75"
    />
  </svg>
);
export default SvgCoins;
