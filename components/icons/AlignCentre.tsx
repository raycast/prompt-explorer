import * as React from "react";
import { SVGProps } from "react";
const SvgAlignCentre = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 12.25v2m0-8v3.5m0-8v2m-1.25 0h2.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1Zm-4 6h10.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H2.75a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default SvgAlignCentre;
