import * as React from "react";
import { SVGProps } from "react";
const SvgSpeakerLow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.75 6.75s.5.417.5 1.25-.5 1.25-.5 1.25m-4.5-7.5L5.318 5.245a2 2 0 0 1-1.328.505H2.75a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h1.24a2 2 0 0 1 1.328.505L9.25 14.25V1.75Z"
    />
  </svg>
);
export default SvgSpeakerLow;
