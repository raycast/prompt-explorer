import * as React from "react";
import { SVGProps } from "react";
const SvgWeights = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.5 8S6 7 8 7s3.5 1 3.5 1M4.25 5.771v4.458c0 .564-.352 1.021-.786 1.021h-.928c-.434 0-.786-.457-.786-1.021V5.77c0-.564.352-1.021.786-1.021h.928c.434 0 .786.457.786 1.021Zm10 0v4.458c0 .564-.352 1.021-.786 1.021h-.928c-.434 0-.786-.457-.786-1.021V5.77c0-.564.352-1.021.786-1.021h.928c.434 0 .786.457.786 1.021Z"
    />
  </svg>
);
export default SvgWeights;
