import * as React from "react";
import { SVGProps } from "react";
const SvgFinder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 4.75v1.5m6-1.5v1.5m-2.25-4.5h-5a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h5m0-12.5h3.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-3.5m0-12.5-1.662 5.4a.85.85 0 0 0 .812 1.1c.47 0 .85.38.85.85v5.15M5 10.32s.956.93 3 .93 3-.93 3-.93"
    />
  </svg>
);
export default SvgFinder;
