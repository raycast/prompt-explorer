import * as React from "react";
import { SVGProps } from "react";
const SvgHammer = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6.738 6.193-4.69 5.029a1.151 1.151 0 0 0 0 1.547l1.083 1.16a.972.972 0 0 0 1.443 0l4.688-5.028M6.738 6.193l.36-.387a1.151 1.151 0 0 0 0-1.547l-1.082-1.16.36-.388c1.196-1.281 3.134-1.281 4.33 0l3.245 3.482c.399.427.399 1.12 0 1.547L12.87 8.9a.972.972 0 0 1-1.442 0l-.361-.386a.972.972 0 0 0-1.443 0l-.36.387M6.737 6.193 9.262 8.9"
    />
  </svg>
);
export default SvgHammer;
