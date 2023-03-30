import * as React from "react";
import { SVGProps } from "react";
const SvgBulletPoints = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM2.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM2.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 13h8.5m-8.5-5h8.5m-8.5-5h8.5"
    />
  </svg>
);
export default SvgBulletPoints;
