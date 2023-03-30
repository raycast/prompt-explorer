import * as React from "react";
import { SVGProps } from "react";
const SvgBatteryDisabled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.5 6.75h.5c.69 0 1.25.56 1.25 1.25v0c0 .69-.56 1.25-1.25 1.25h-.5M1.75 5.75v4.5a2 2 0 0 0 2 2h3.5M5 3.75h5.25a2 2 0 0 1 2 2v4.5c0 .583-.25 1.107-.647 1.473m1.647 2.527L2.75 1.75"
    />
  </svg>
);
export default SvgBatteryDisabled;
