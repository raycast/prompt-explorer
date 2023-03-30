import * as React from "react";
import { SVGProps } from "react";
const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 11.75v.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-.5M8 10.25v-8.5m0 0 3.25 3.5M8 1.75l-3.25 3.5"
    />
  </svg>
);
export default SvgUpload;
