import * as React from "react";
import { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 16}
    height={props.height || 16}
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.848 7.47a1 1 0 1 0-1.696 1.06l1.696-1.06Zm7.86-2.763a1 1 0 0 0-1.415-1.414l1.414 1.414ZM6.5 12l-.848.53a1 1 0 0 0 1.81-.255L6.5 12Zm.962.275c.92-3.221 2.733-5.056 5.245-7.568l-1.414-1.414C8.805 5.78 6.618 7.946 5.538 11.725l1.924.55ZM3.152 8.53l2.5 4 1.696-1.06-2.5-4-1.696 1.06Z"
    />
  </svg>
);
export default SvgCheck;
