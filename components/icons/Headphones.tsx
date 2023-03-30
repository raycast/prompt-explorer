import * as React from "react";
import { SVGProps } from "react";
const SvgHeadphones = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 10.656V8.213c0-3.57 2.634-6.463 5.882-6.463h.736c3.248 0 5.882 2.894 5.882 6.463v2.443M2.246 13.54l1 .584a1 1 0 0 0 1.504-.864V9.25a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v3.426a1 1 0 0 0 .496.863Zm10.508.584 1-.584a1 1 0 0 0 .496-.863V9.25a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4.009a1 1 0 0 0 1.504.864Z"
    />
  </svg>
);
export default SvgHeadphones;
