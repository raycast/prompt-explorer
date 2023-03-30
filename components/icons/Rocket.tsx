import * as React from "react";
import { SVGProps } from "react";
const SvgRocket = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.878 8.75 2.28 11.425a2 2 0 0 0-.53 1.357v1.468h12.5v-1.468a2 2 0 0 0-.53-1.357L11.122 8.75m-6.372 1c0-2.463 3.25-8 3.25-8s3.25 5.537 3.25 8v4.5h-6.5v-4.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </svg>
);
export default SvgRocket;
