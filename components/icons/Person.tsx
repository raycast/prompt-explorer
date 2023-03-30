import * as React from "react";
import { SVGProps } from "react";
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 4.25a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM8 9.25c-2.245 0-4.318 1.055-5.134 3.046-.419 1.022.529 1.954 1.633 1.954h7.002c1.104 0 2.052-.932 1.633-1.954C12.318 10.305 10.245 9.25 8 9.25Z"
    />
  </svg>
);
export default SvgPerson;
