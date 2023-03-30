import * as React from "react";
import { SVGProps } from "react";
const SvgBarCode = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.75 5.75v4.5M8 5.75v4.5m3.25-4.5v4.5m3 .5v.5a2 2 0 0 1-2 2h-.5m2.5-8v-.5a2 2 0 0 0-2-2h-.5m-10 8v.5a2 2 0 0 0 2 2h.5m-2.5-8v-.5a2 2 0 0 1 2-2h.5"
    />
  </svg>
);
export default SvgBarCode;
