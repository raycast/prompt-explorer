import * as React from "react";
import { SVGProps } from "react";
const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2.75 3.25 3.87 3.686a2 2 0 0 0 2.76 0l3.87-3.686m-9.5 10h8.5a2 2 0 0 0 2-2v-6.5a2 2 0 0 0-2-2h-8.5a2 2 0 0 0-2 2v6.5a2 2 0 0 0 2 2Z"
    />
  </svg>
);
export default SvgEnvelope;
