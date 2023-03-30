import * as React from "react";
import { SVGProps } from "react";
const SvgShield01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 14.25c5.5 0 6.25-10.5 6.25-10.5s-3.25-2-6.25-2m0 12.5c-5.5 0-6.25-10.5-6.25-10.5s3.25-2 6.25-2m0 12.5v-8m0-4.5v4.5m0 0H2.104M8 6.25h5.896"
    />
  </svg>
);
export default SvgShield01;
