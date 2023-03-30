import * as React from "react";
import { SVGProps } from "react";
const SvgBoltDisabled = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2.75 1.75 10.5 12.5m-9-6.5-1.5 1.5h3v5l1.496-1.496m-1.154-7.36L9.25 1.75v6h4l-2.832 2.832"
    />
  </svg>
);
export default SvgBoltDisabled;
