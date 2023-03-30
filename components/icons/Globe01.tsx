import * as React from "react";
import { SVGProps } from "react";
const SvgGlobe01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.093 2.094S10.531 4.083 10.531 8s-1.438 5.906-1.438 5.906M6.907 2.094S5.469 4.083 5.469 8s1.438 5.906 1.438 5.906M1.755 8h12.49m.005 0a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
    />
  </svg>
);
export default SvgGlobe01;
