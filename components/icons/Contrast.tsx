import * as React from "react";
import { SVGProps } from "react";
const SvgContrast = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.25 1.75h-8.5a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2Z"
    />
    <path
      fill="currentColor"
      d="M11.5 4H5.207a.5.5 0 0 0-.353.854l6.292 6.292a.5.5 0 0 0 .854-.353V4.5a.5.5 0 0 0-.5-.5Z"
    />
  </svg>
);
export default SvgContrast;
