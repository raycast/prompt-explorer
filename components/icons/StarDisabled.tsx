import * as React from "react";
import { SVGProps } from "react";
const SvgStarDisabled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.25 6.029 7.434 2.17a.591.591 0 0 1 1.132 0L9.62 5.608c.077.25.306.42.566.42h3.47c.567 0 .81.726.36 1.073l-2.858 2.2c-.197.152-.731.96-.658 1.199M1.984 7.1l2.858 2.202a.6.6 0 0 1 .206.65l-1.08 3.521c-.17.556.468 1.005.927.652L7.64 12.01a.589.589 0 0 1 .72 0l2.39 2.239m-9-12.5 12.5 12.5"
    />
  </svg>
);
export default SvgStarDisabled;
