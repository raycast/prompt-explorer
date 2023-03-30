import * as React from "react";
import { SVGProps } from "react";
const SvgGlobe02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.25 1.755V6.25a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H2.167m8.566 3.372a6.25 6.25 0 1 1 3.392-4.372m-3.392 4.372-.233-.233a2.751 2.751 0 0 1 3.375-4.27l.25.131m-3.392 4.372a6.26 6.26 0 0 0 3.392-4.372"
    />
  </svg>
);
export default SvgGlobe02;
