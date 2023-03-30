import * as React from "react";
import { SVGProps } from "react";
const SvgHardDrive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 11.25V8.198a2 2 0 0 1 .039-.392l.89-4.448a2 2 0 0 1 1.96-1.608h6.721a2 2 0 0 1 1.962 1.608l.89 4.448c.025.129.038.26.038.392v3.052m-9.5 0h.5m-1.5 3h8.5a2 2 0 0 0 2-2v-1.5a2 2 0 0 0-2-2h-8.5a2 2 0 0 0-2 2v1.5a2 2 0 0 0 2 2Z"
    />
  </svg>
);
export default SvgHardDrive;
