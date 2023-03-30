import * as React from "react";
import { SVGProps } from "react";
const SvgChessPiece = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.701 5.837 4.75 11.75m4.549-5.913 1.951 5.913m2 2.5v-.5a2 2 0 0 0-2-2h-6.5a2 2 0 0 0-2 2v.5h10.5ZM10.25 4a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
  </svg>
);
export default SvgChessPiece;
