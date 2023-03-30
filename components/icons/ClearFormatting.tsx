import * as React from "react";
import { SVGProps } from "react";
const SvgClearFormatting = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.25 2.75H14a.75.75 0 0 0-.75-.75v.75Zm-.75 1.5a.75.75 0 0 0 1.5 0h-1.5ZM6.75 13.5a.75.75 0 0 0 0 1.5v-1.5Zm2.5 1.5a.75.75 0 0 0 0-1.5V15ZM4 2a.75.75 0 0 0 0 1.5V2Zm4.75 1a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm1.5 4a.75.75 0 0 0-1.5 0h1.5ZM3.324 1.268a.75.75 0 1 0-1.148.964l1.148-.964Zm9.352 13.464a.75.75 0 1 0 1.148-.964l-1.148.964ZM12.5 2.75v1.5H14v-1.5h-1.5ZM6.75 15H8v-1.5H6.75V15ZM8 15h1.25v-1.5H8V15ZM4 3.5h9.25V2H4v1.5ZM7.25 3v5h1.5V3h-1.5Zm0 9v2.25h1.5V12h-1.5ZM2.176 2.232l10.5 12.5 1.148-.964-10.5-12.5-1.148.964Z"
    />
  </svg>
);
export default SvgClearFormatting;
