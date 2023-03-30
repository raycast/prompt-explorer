import * as React from "react";
import { SVGProps } from "react";
const SvgCar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM11.5 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.25 6H14l-1 1.313-.704-3.917a2 2 0 0 0-1.968-1.646H5.673a2 2 0 0 0-1.969 1.646L3 7.313 2.25 6h-.5m9 6.25v1.25a.75.75 0 0 0 1.5 0v-1.25m-8.5 0v1.25a.75.75 0 0 0 1.5 0v-1.25m9-2.5v1.5a1 1 0 0 1-1 1H2.75a1 1 0 0 1-1-1v-1.5a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3Z"
    />
  </svg>
);
export default SvgCar;
