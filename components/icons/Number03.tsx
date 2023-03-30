import * as React from "react";
import { SVGProps } from "react";
const SvgNumber03 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.75 5c.376-.825 1.386-1.25 2.256-1.25A2.247 2.247 0 0 1 10.25 6c0 1.243-1.26 2-2.5 2 1.24 0 2.5.757 2.5 2a2.247 2.247 0 0 1-2.244 2.25c-.873 0-1.886-.418-2.256-1.25"
    />
  </svg>
);
export default SvgNumber03;
