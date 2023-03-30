import * as React from "react";
import { SVGProps } from "react";
const SvgRaindrop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.25 10c0 2.5-1.903 4.25-4.25 4.25S3.75 12.5 3.75 10 8 1.75 8 1.75 12.25 7.5 12.25 10Z"
    />
  </svg>
);
export default SvgRaindrop;
