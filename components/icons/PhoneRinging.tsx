import * as React from "react";
import { SVGProps } from "react";
const SvgPhoneRinging = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.75 1.75h.135a3.365 3.365 0 0 1 3.365 3.365v.135m-4.5-.5h.058c.796 0 1.442.646 1.442 1.442v.058M1.857 2.78c.412 2.886 2.367 10.888 11.391 11.44.551.034 1.002-.418 1.002-.97v-2.5l-2.25-2-1.71.855a2 2 0 0 1-2.31-.374L6.77 8.019a2 2 0 0 1-.375-2.308L7.25 4l-2-2.25H2.79c-.567 0-1.013.467-.933 1.03Z"
    />
  </svg>
);
export default SvgPhoneRinging;
