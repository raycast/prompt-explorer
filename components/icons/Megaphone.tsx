import * as React from "react";
import { SVGProps } from "react";
const SvgMegaphone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.25 1.75H15a.75.75 0 0 0-.979-.714l.229.714Zm0 9.5-.229.714A.75.75 0 0 0 15 11.25h-.75ZM8 9.25l.229-.714A.75.75 0 0 0 8 8.5v.75Zm0-5.5v.75a.75.75 0 0 0 .229-.036L8 3.75Zm-3.5 5.5a.75.75 0 0 0-1.5 0h1.5Zm3.5 0a.75.75 0 0 0-1.5 0H8Zm5.5-7.5v9.5H15v-9.5h-1.5Zm.979 8.786-6.25-2-.458 1.428 6.25 2 .458-1.428Zm-.458-9.5-6.25 2 .458 1.428 6.25-2-.458-1.428ZM8 3H3.75v1.5H8V3ZM1 5.75v1.5h1.5v-1.5H1ZM3.75 10H8V8.5H3.75V10ZM3 9.25v3.25h1.5V9.25H3Zm5 3.25V9.25H6.5v3.25H8ZM5.5 15A2.5 2.5 0 0 0 8 12.5H6.5a1 1 0 0 1-1 1V15ZM3 12.5A2.5 2.5 0 0 0 5.5 15v-1.5a1 1 0 0 1-1-1H3ZM1 7.25A2.75 2.75 0 0 0 3.75 10V8.5c-.69 0-1.25-.56-1.25-1.25H1ZM3.75 3A2.75 2.75 0 0 0 1 5.75h1.5c0-.69.56-1.25 1.25-1.25V3Z"
    />
  </svg>
);
export default SvgMegaphone;
