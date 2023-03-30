import * as React from "react";
import { SVGProps } from "react";
const SvgQuoteBlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 13.25h12.5m-12.5-3.5h12.5m-3.5-3.5h3.5m-3.5-3.5h3.5m-12 0s-.5 1.05-.5 2.1m0 0v1.4h1.5v-1.4h-1.5Zm4.5-2.1s-.5 1.05-.5 2.1m0 0v1.4h1.5v-1.4h-1.5Z"
    />
  </svg>
);
export default SvgQuoteBlock;
