import * as React from "react";
import { SVGProps } from "react";
const SvgCloudLightning = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.75 11.25.25-.045a2.75 2.75 0 0 0 .248-5.352 4.25 4.25 0 0 0-8.495 0A2.751 2.751 0 0 0 4 11.205l.25.045m4-3.5-1.5 3h2.5l-1.5 3.5"
    />
  </svg>
);
export default SvgCloudLightning;
