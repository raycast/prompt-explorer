import * as React from "react";
import { SVGProps } from "react";
const SvgTrain = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM10.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.75 11.25-2 3m8.5-3 2 3m-9.478-3h8.456c.607 0 1.08-.514 1.016-1.105l-.71-6.604c-.11-1.018-.986-1.791-2.032-1.791H5.498c-1.046 0-1.923.773-2.032 1.79l-.71 6.605c-.064.59.41 1.105 1.016 1.105Z"
    />
  </svg>
);
export default SvgTrain;
