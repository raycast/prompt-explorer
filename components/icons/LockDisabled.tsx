import * as React from "react";
import { SVGProps } from "react";
const SvgLockDisabled = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1.75 1.75 12.5 12.5M6 5.75h5.25a2 2 0 0 1 2 2V13m-3 1.25h-5.5a2 2 0 0 1-2-2v-4.5m8.5-2.25V5a3.25 3.25 0 0 0-6.45-.575"
    />
  </svg>
);
export default SvgLockDisabled;
