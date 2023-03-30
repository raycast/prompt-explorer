import * as React from "react";
import { SVGProps } from "react";
const SvgWand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 16}
    height={props.height || 16}
    {...props}
  >
    <g clipPath="url(#wand_svg__a)">
      <path
        fill="currentColor"
        d="m9.962 8.091-1.87 1.87L6.039 7.91l1.87-1.87a.985.985 0 0 1 1.394 0l.659.659a.985.985 0 0 1 0 1.393Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.42 12.42-.354-.354M14.25 8h-.5m-1.331-4.42-.354.354M8 1.75v.5M3.933 3.934l-.353-.353M4 14.25l5.962-6.16a.985.985 0 0 0 0-1.393l-.66-.66a.985.985 0 0 0-1.393 0L1.749 12"
      />
    </g>
    <defs>
      <clipPath id="wand_svg__a">
        <rect fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWand;
