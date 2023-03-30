import * as React from "react";
import { SVGProps } from "react";
const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.25 3.75-2.98 1.677a2 2 0 0 0-1.02 1.743v1.66a2 2 0 0 0 1.02 1.743l2.98 1.677v-8.5Z"
    />
  </svg>
);
export default SvgVideo;
