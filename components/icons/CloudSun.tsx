import * as React from "react";
import { SVGProps } from "react";
const SvgCloudSun = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.98 5.125.432-.25m-2.287-2.288-.25.433M8 1.75v.5m-3.125.337.25.433M2.587 4.875l.433.25M4.5 14.25a2.75 2.75 0 0 1-.748-5.397 4.25 4.25 0 0 1 8.496 0 2.751 2.751 0 0 1-.748 5.397h-7Z"
    />
  </svg>
);
export default SvgCloudSun;
