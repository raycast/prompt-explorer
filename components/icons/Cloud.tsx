import * as React from "react";
import { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.248 6.853-.75.025a.75.75 0 0 0 .546.697l.204-.722Zm-8.495 0 .203.722a.75.75 0 0 0 .546-.697l-.75-.025ZM4.5 11.5a2 2 0 0 1-2-2H1A3.5 3.5 0 0 0 4.5 13v-1.5Zm7 0h-7V13h7v-1.5Zm2-2a2 2 0 0 1-2 2V13A3.5 3.5 0 0 0 15 9.5h-1.5Zm-1.456-1.925A2.001 2.001 0 0 1 13.5 9.5H15a3.501 3.501 0 0 0-2.55-3.37l-.406 1.445ZM8 3.5a3.5 3.5 0 0 1 3.498 3.378l1.5-.05A5 5 0 0 0 8 2v1.5ZM4.502 6.878A3.5 3.5 0 0 1 8 3.5V2a5 5 0 0 0-4.997 4.827l1.5.051ZM2.5 9.5c0-.915.615-1.688 1.456-1.925L3.549 6.13A3.501 3.501 0 0 0 1 9.5h1.5Z"
    />
  </svg>
);
export default SvgCloud;
