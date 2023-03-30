import * as React from "react";
import { SVGProps } from "react";
const SvgPatch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.5 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.5 8 .164-.164a2 2 0 0 0 .586-1.414V5.75a4 4 0 0 0-4-4h-.672a2 2 0 0 0-1.414.586L8 2.5M13.5 8l.164.164a2 2 0 0 1 .586 1.414v.672a4 4 0 0 1-4 4h-.672a2 2 0 0 1-1.414-.586L8 13.5M13.5 8 8 13.5m0 0-.164.164a2 2 0 0 1-1.414.586H5.75a4 4 0 0 1-4-4v-.672a2 2 0 0 1 .586-1.414L2.5 8m0 0-.164-.164a2 2 0 0 1-.586-1.414V5.75a4 4 0 0 1 4-4h.672a2 2 0 0 1 1.414.586L8 2.5M2.5 8 8 2.5"
    />
  </svg>
);
export default SvgPatch;
