import * as React from "react";
import { SVGProps } from "react";
const SvgCrypto = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.75 3.75V8m0-4.25h-2m2 0h1m-1 8.5h4.375a2.125 2.125 0 0 0 2.125-2.125v0A2.125 2.125 0 0 0 10.125 8H5.75m0 4.25V8m0 4.25h-2m2-4.25h3.375a2.125 2.125 0 0 0 2.125-2.125v0A2.125 2.125 0 0 0 9.125 3.75H6.75m0 0v-2m2.5 2v-2m-2.5 12.5v-2m2.5 2v-2"
    />
  </svg>
);
export default SvgCrypto;
