import * as React from "react";
import { SVGProps } from "react";
const SvgLeaderboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.25 11.75v-3h5.5v2m-5.5 1h-3.5v2.5h3.5m0-2.5v2.5m5.5-3.5h3.5v3.5h-3.5m0-3.5v3.5m-5.5 0h5.5"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 1.75.505 1.555h1.635l-1.323.96.506 1.555L8 4.86l-1.323.96.506-1.554-1.323-.961h1.635L8 1.75Z"
    />
  </svg>
);
export default SvgLeaderboard;
