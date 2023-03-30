import * as React from "react";
import { SVGProps } from "react";
const SvgBoat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.25 10.75v-3m3.5 3v-3.5m0 0v-5.5l4.169 3.763c.682.616.24 1.737-.687 1.737H8.75Zm5.5 3.5H1.75l1.424 2.492a2 2 0 0 0 1.737 1.008h5.997a2 2 0 0 0 1.683-.918l1.659-2.582Z"
    />
  </svg>
);
export default SvgBoat;
