import * as React from "react";
import { SVGProps } from "react";
const SvgRosette = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 8.25 2.493-3.451a4 4 0 0 0 .757-2.342V1.75H2.75v.707a4 4 0 0 0 .757 2.342L6 8.25M11.25 11a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z"
    />
  </svg>
);
export default SvgRosette;
