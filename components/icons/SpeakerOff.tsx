import * as React from "react";
import { SVGProps } from "react";
const SvgSpeakerOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2.75 1.75 10.5 12.5V1.75L9.318 5.245a2 2 0 0 1-1.328.505H6.11m.14 4.5h-2.5a1 1 0 0 1-1-1v-3.5"
    />
  </svg>
);
export default SvgSpeakerOff;
