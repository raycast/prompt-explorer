import * as React from "react";
import { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 3.75s-3-2-6.25-2v10.5c3.25 0 6.25 2 6.25 2m0-10.5s3-2 6.25-2v10.5c-3.25 0-6.25 2-6.25 2m0-10.5v10.5"
    />
  </svg>
);
export default SvgBook;
