import * as React from "react";
import { SVGProps } from "react";
const SvgGift = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 5.75H5.75a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h.125C7.049 1.75 8 2.701 8 3.875V5.75Zm0 0h2.25a2 2 0 1 0 0-4h-.125A2.125 2.125 0 0 0 8 3.875V5.75Zm0 0v8.5m-6.25-8.5h1m0 0h10.5m-10.5 0v6.5a2 2 0 0 0 2 2h6.5a2 2 0 0 0 2-2v-6.5m0 0h1"
    />
  </svg>
);
export default SvgGift;
