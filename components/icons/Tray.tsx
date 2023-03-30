import * as React from "react";
import { SVGProps } from "react";
const SvgTray = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.25 7.75v4.5a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2v-4.5m12.5 0H11s-.5 2.5-3 2.5-3-2.5-3-2.5H1.75m12.5 0-1.533-4.657a2 2 0 0 0-1.889-1.343H5.172a2 2 0 0 0-1.89 1.343L1.75 7.75m12.5 0V10M1.75 7.75V10"
    />
  </svg>
);
export default SvgTray;
