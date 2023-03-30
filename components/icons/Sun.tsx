import * as React from "react";
import { SVGProps } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3.58 3.58 1.944 1.945m4.95 4.95 1.945 1.944M1.749 8H4.5m7 0h2.75M3.58 12.42l1.945-1.945m4.95-4.95 1.944-1.944M8 14.25V11.5m0-7V1.75M11.25 8a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z"
    />
  </svg>
);
export default SvgSun;
