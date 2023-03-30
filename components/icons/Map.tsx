import * as React from "react";
import { SVGProps } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.75 3.75 3.5-2v10.5l-3.5 2m-5-12.5-4 2v10.5l4-2m0-10.5v10.5m0-10.5 5 2v10.5l-5-2"
    />
  </svg>
);
export default SvgMap;
