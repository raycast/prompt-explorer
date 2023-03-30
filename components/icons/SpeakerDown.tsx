import * as React from "react";
import { SVGProps } from "react";
const SvgSpeakerDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.25 14.25-3.932-3.495a2 2 0 0 0-1.328-.505H2.75a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 1-1h1.24a2 2 0 0 0 1.328-.505L9.25 1.75m.476 7 2.25 2.5m0 0 2.25-2.5m-2.25 2.5v-6.5"
    />
  </svg>
);
export default SvgSpeakerDown;
