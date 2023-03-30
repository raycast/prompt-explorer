import * as React from "react";
import { SVGProps } from "react";
const SvgFingerprint = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.25 8.25V8A6.25 6.25 0 0 0 8 1.75h-.25m6.5 10v2.5M1.75 8c0-1.93.875-3.656 2.25-4.803L4.25 3m7 7.25V8A3.25 3.25 0 0 0 8 4.75h-.25m-6 6.5h1a2 2 0 0 0 2-2v-.5m6.5 4v1.5M8 8.75v1.5a4 4 0 0 1-4 4h-.25m1.5-8h.01"
    />
  </svg>
);
export default SvgFingerprint;
