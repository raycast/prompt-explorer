import * as React from "react";
import { SVGProps } from "react";
const SvgGameController = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 3.75v-2m2.502 10.45.235.796c.22.742.922 1.254 1.722 1.254 1.073 0 1.905-.904 1.778-1.933l-.513-4.158c-.31-2.515-2.52-4.409-5.144-4.409H7.42c-2.624 0-4.834 1.894-5.144 4.409l-.513 4.158c-.127 1.029.705 1.933 1.778 1.933.8 0 1.502-.512 1.722-1.254l.235-.795c.255-.859 1.068-.451 1.993-.451h1.018c.925 0 1.738-.408 1.993.45Z"
    />
  </svg>
);
export default SvgGameController;
