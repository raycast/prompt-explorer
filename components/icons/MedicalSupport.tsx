import * as React from "react";
import { SVGProps } from "react";
const SvgMedicalSupport = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 6.75v4.5M10.25 9h-4.5m0-5.5v-.75a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v.75m-6.5.25h8.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2v-6.5a2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgMedicalSupport;
