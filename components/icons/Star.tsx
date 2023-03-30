import * as React from "react";
import { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.434 2.171a.591.591 0 0 1 1.132 0L9.62 5.608c.077.25.306.42.566.42h3.47c.567 0 .81.726.36 1.073l-2.858 2.2a.6.6 0 0 0-.206.652l1.08 3.52c.17.556-.468 1.005-.927.652L8.36 12.01a.589.589 0 0 0-.72 0l-2.745 2.114c-.459.353-1.096-.096-.926-.652l1.08-3.52a.6.6 0 0 0-.207-.651L1.984 7.1c-.45-.347-.207-1.072.36-1.072h3.47c.26 0 .49-.171.566-.421L7.434 2.17Z"
    />
  </svg>
);
export default SvgStar;
