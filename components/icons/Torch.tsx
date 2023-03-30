import * as React from "react";
import { SVGProps } from "react";
const SvgTorch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.25 8h-.5m5.5-4.25c-1.543 0-2.614.63-3.257 1.182-.522.45-1.162.818-1.851.818H2.75a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h6.392c.69 0 1.329.368 1.851.818.643.552 1.714 1.182 3.257 1.182v-8.5Z"
    />
  </svg>
);
export default SvgTorch;
