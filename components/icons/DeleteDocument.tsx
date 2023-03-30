import * as React from "react";
import { SVGProps } from "react";
const SvgDeleteDocument = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.25 14.25h-2.5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2h3.836a1 1 0 0 1 .707.293l3.905 3.905a.177.177 0 0 1 .052.125v0c0 .098-.08.177-.177.177H9.75a1 1 0 0 1-1-1V2m5.5 8.75L12.5 12.5m0 0-1.75 1.75m1.75-1.75-1.75-1.75m1.75 1.75 1.75 1.75"
    />
  </svg>
);
export default SvgDeleteDocument;
