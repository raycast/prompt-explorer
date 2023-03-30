import * as React from "react";
import { SVGProps } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.25 8.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.75 6.75v4.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2h-.382a1 1 0 0 1-.894-.553l-.448-.894a1 1 0 0 0-.894-.553H6.368a1 1 0 0 0-.894.553l-.448.894a1 1 0 0 1-.894.553H3.75a2 2 0 0 0-2 2Z"
    />
  </svg>
);
export default SvgCamera;
