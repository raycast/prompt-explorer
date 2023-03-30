import * as React from "react";
import { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.75 14.25V3.75a2 2 0 0 1 2-2h4.5a2 2 0 0 1 2 2v10.5L8 10.75l-4.25 3.5Z"
    />
  </svg>
);
export default SvgBookmark;
