import * as React from "react";
import { SVGProps } from "react";
const SvgReceipt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.75 5.25h4.5m-4.5 3h4.5m-7.5-6.5v12.5l.312-.218a4 4 0 0 1 4.441-.098L8 14.25l.497-.316a4 4 0 0 1 4.441.098l.312.218V1.75H2.75Z"
    />
  </svg>
);
export default SvgReceipt;
