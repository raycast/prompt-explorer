import * as React from "react";
import { SVGProps } from "react";
const SvgBinoculars = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.25 12a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0m4.5 0S6.5 10.75 8 10.75M1.75 12l.83-6.64c.113-.9.325-1.813.878-2.531C4.012 2.109 4.64 1.75 5.5 1.75 6.743 1.75 8 2.757 8 4m1.75 8S9.5 10.75 8 10.75M9.75 12a2.25 2.25 0 0 0 4.5 0m-4.5 0a2.25 2.25 0 0 1 4.5 0M8 10.75V4m6.25 8-.83-6.64c-.113-.9-.325-1.813-.878-2.531-.554-.72-1.181-1.079-2.042-1.079C9.257 1.75 8 2.757 8 4"
    />
  </svg>
);
export default SvgBinoculars;
