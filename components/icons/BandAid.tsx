import * as React from "react";
import { SVGProps } from "react";
const SvgBandAid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 10.25v-.672a2 2 0 0 1 .586-1.414l5.828-5.828a2 2 0 0 1 1.414-.586h.672a4 4 0 0 1 4 4v.672a2 2 0 0 1-.586 1.414l-5.828 5.828a2 2 0 0 1-1.414.586H5.75a4 4 0 0 1-4-4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.5 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.5 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </svg>
);
export default SvgBandAid;
