import * as React from "react";
import { SVGProps } from "react";
const SvgHighlight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3.25 9.25 3.5 3.5m3 1.5h4.5m-2.5-12.5 2.5 2.5-6.34 7.871a4 4 0 0 1-2.331 1.413L2 14.25 1.75 14l.716-3.579a4 4 0 0 1 1.413-2.33L11.75 1.75Z"
    />
  </svg>
);
export default SvgHighlight;
