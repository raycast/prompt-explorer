import * as React from "react";
import { SVGProps } from "react";
const SvgPaperclip = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 5.754-3.984 3.68a1.536 1.536 0 0 0 0 2.294 1.86 1.86 0 0 0 2.482 0L13.25 7.25c1.371-1.267 1.343-3.283-.028-4.55s-3.594-1.267-4.965 0L3.292 7.287c-2.056 1.9-2.056 4.981 0 6.881l.089.082"
    />
  </svg>
);
export default SvgPaperclip;
