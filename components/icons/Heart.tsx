import * as React from "react";
import { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.142 3.31c1.436-1.021 3.376-.607 4.333.925L8 5.25l.525-1.015c.957-1.532 2.897-1.946 4.333-.925 1.436 1.021 1.824 3.09.867 4.623C12.768 9.464 8 13.25 8 13.25S3.232 9.464 2.275 7.933c-.957-1.532-.57-3.602.867-4.623Z"
    />
  </svg>
);
export default SvgHeart;
