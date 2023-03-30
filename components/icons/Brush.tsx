import * as React from "react";
import { SVGProps } from "react";
const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 9.75 5.142-7.196a2.342 2.342 0 1 1 3.304 3.304L7.25 12m-5.5 2.25s.81-1.307 1-2.25c.038-.19.06-.405.07-.626.04-.863.693-1.624 1.558-1.624H5A2.25 2.25 0 0 1 7.25 12v0A2.25 2.25 0 0 1 5 14.25H1.75Z"
    />
  </svg>
);
export default SvgBrush;
