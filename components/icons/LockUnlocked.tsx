import * as React from "react";
import { SVGProps } from "react";
const SvgLockUnlocked = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.75 5.5V5A3.25 3.25 0 0 1 8 1.75c1.5 0 2.25.5 2.25.5m-5.5 12h6.5a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2h-6.5a2 2 0 0 0-2 2v4.5a2 2 0 0 0 2 2Z"
    />
  </svg>
);
export default SvgLockUnlocked;
