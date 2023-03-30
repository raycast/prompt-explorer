import * as React from "react";
import { SVGProps } from "react";
const SvgHashtag = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.75 13.25 1.5-10.5m3.5 10.5.429-3m0 0 .642-4.5m-.642 4.5H2.75m7.429 0h2.071m-1.429-4.5.429-3m-.429 3H3.75m7.071 0h2.429"
    />
  </svg>
);
export default SvgHashtag;
