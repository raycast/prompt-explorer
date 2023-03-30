import * as React from "react";
import { SVGProps } from "react";
const SvgEllipsis = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 16}
    height={props.height || 16}
    {...props}
  >
    <circle cx={8} cy={8} r={1.5} fill="currentColor" />
    <circle cx={12.5} cy={8} r={1.5} fill="currentColor" />
    <circle cx={3.5} cy={8} r={1.5} fill="currentColor" />
  </svg>
);
export default SvgEllipsis;
