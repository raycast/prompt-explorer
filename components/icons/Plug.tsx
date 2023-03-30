import * as React from "react";
import { SVGProps } from "react";
const SvgPlug = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 10-4.25 4.25m9.992-6.992L14.25 4.75m-5.508-.492L11.25 1.75m-4.016 1 6.016 6.016-1.239 1.238A4.254 4.254 0 1 1 5.997 3.99L7.234 2.75Z"
    />
  </svg>
);
export default SvgPlug;
