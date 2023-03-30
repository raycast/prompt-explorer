import * as React from "react";
import { SVGProps } from "react";
const SvgAirplaneFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 16}
    height={props.height || 16}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6 8c0 1.94.493 4.608.787 6.025A1.23 1.23 0 0 0 8 15a1.23 1.23 0 0 0 1.213-.975C9.507 12.608 10 9.94 10 8c0-1.94-.493-4.609-.787-6.025A1.23 1.23 0 0 0 8 1a1.23 1.23 0 0 0-1.213.975C6.493 3.391 6 6.06 6 8Z"
    />
    <path
      fill="currentColor"
      d="M5.5 15a.5.5 0 0 1-.3-.9L8 12l2.8 2.1a.5.5 0 0 1-.3.9h-5ZM1 9.638a1 1 0 0 1 .579-.907L8 5.75l6.421 2.981a1 1 0 0 1 .579.907V10L8 9l-7 1v-.362Z"
    />
  </svg>
);
export default SvgAirplaneFilled;
