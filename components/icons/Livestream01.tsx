import * as React from "react";
import { SVGProps } from "react";
const SvgLivestream01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.42 3.75a5.849 5.849 0 0 1 0 8.5m-8.84 0a5.849 5.849 0 0 1 0-8.5m6.718 2a3.135 3.135 0 0 1 0 4.5m-4.596 0a3.135 3.135 0 0 1 0-4.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </svg>
);
export default SvgLivestream01;
