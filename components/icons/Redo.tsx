import * as React from "react";
import { SVGProps } from "react";
const SvgRedo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.75 2.75 12.25 5m0 0-2.5 2.25M12.25 5h-4.5a4 4 0 0 0-4 4v.25a4 4 0 0 0 4 4h4.5"
    />
  </svg>
);
export default SvgRedo;
