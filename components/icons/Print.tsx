import * as React from "react";
import { SVGProps } from "react";
const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.25 4.75v-3h-8.5v3m1 7.5h-2a1 1 0 0 1-1-1v-5.5a1 1 0 0 1 1-1h10.5a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1h-2m-6.5 0v-2.5h6.5v2.5m-6.5 0v2h6.5v-2"
    />
  </svg>
);
export default SvgPrint;
