import * as React from "react";
import { SVGProps } from "react";
const SvgCopyClipboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.075 2.75H4.75a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h6.5a2 2 0 0 0 2-2v-7.5a2 2 0 0 0-2-2H9.925m-.04.275-.292 1.023A1.657 1.657 0 0 1 8 5.25v0c-.74 0-1.39-.49-1.593-1.202l-.293-1.023a1 1 0 0 1 .962-1.275h1.848a1 1 0 0 1 .962 1.275Z"
    />
  </svg>
);
export default SvgCopyClipboard;
