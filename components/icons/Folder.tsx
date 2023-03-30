import * as React from "react";
import { SVGProps } from "react";
const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 4.75h11.5m0 0a1 1 0 0 1 1 1v6.5a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2h2.342a2 2 0 0 1 1.506.683l1.728 1.976a1 1 0 0 0 .753.341h3.171Z"
    />
  </svg>
);
export default SvgFolder;
