import * as React from "react";
import { SVGProps } from "react";
const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 4.25v8a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2v0m0 0v-1.8a2 2 0 0 0-2.19-1.991l-6.888.656a1.571 1.571 0 0 0 .15 3.135h8.928Zm-1 4h-.5"
    />
  </svg>
);
export default SvgWallet;
