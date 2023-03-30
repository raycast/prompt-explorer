import * as React from "react";
import { SVGProps } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.25 8.665a5.06 5.06 0 0 1-2.374.585c-2.724 0-4.933-2.127-4.933-4.75a4.61 4.61 0 0 1 .909-2.748C4.467 1.84 1.75 4.604 1.75 8c0 3.452 2.806 6.25 6.268 6.25 3.236 0 5.9-2.446 6.232-5.585Z"
    />
  </svg>
);
export default SvgMoon;
