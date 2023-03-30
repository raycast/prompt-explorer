import * as React from "react";
import { SVGProps } from "react";
const SvgRemovePerson = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 4.25a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM13.25 11.75h-3.5M7.25 14.25H3.499c-1.105 0-2.048-.928-1.652-1.959C2.61 10.303 4.505 9.25 6.25 9.25h1"
    />
  </svg>
);
export default SvgRemovePerson;
