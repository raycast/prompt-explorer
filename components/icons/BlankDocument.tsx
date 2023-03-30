import * as React from "react";
import { SVGProps } from "react";
const SvgBlankDocument = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.75 2v3.25a1 1 0 0 0 1 1H13m.25.164v5.836a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2h3.836a1 1 0 0 1 .707.293l3.664 3.664a1 1 0 0 1 .293.707Z"
    />
  </svg>
);
export default SvgBlankDocument;
