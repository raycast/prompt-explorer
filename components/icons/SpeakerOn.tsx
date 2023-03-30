import * as React from "react";
import { SVGProps } from "react";
const SvgSpeakerOn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 5.75s1.5.75 1.5 2.25-1.5 2.25-1.5 2.25m-3.5-8.5L5.318 5.245a2 2 0 0 1-1.328.505H2.75a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h1.24a2 2 0 0 1 1.328.505L9.25 14.25V1.75Z"
    />
  </svg>
);
export default SvgSpeakerOn;
