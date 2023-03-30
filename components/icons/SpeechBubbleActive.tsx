import * as React from "react";
import { SVGProps } from "react";
const SvgSpeechBubbleActive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.75 12.124h.75a.75.75 0 0 0-.563-.726l-.187.726Zm0 2.126H4a.75.75 0 0 0 1.172.62l-.422-.62Zm2.941-2v-.75a.75.75 0 0 0-.422.13l.422.62ZM2.5 5.75A3.25 3.25 0 0 1 5.75 2.5V1A4.75 4.75 0 0 0 1 5.75h1.5Zm0 2.5v-2.5H1v2.5h1.5Zm2.437 3.148A3.252 3.252 0 0 1 2.5 8.25H1a4.752 4.752 0 0 0 3.563 4.6l.374-1.452ZM5.5 14.25v-2.126H4v2.126h1.5Zm1.77-2.62-2.942 2 .844 1.24 2.94-2-.843-1.24Zm2.98-.13H7.691V13h2.559v-1.5Zm3.25-3.25a3.25 3.25 0 0 1-3.25 3.25V13A4.75 4.75 0 0 0 15 8.25h-1.5Zm0-2.5v2.5H15v-2.5h-1.5ZM10.25 2.5a3.25 3.25 0 0 1 3.25 3.25H15A4.75 4.75 0 0 0 10.25 1v1.5Zm-4.5 0h4.5V1h-4.5v1.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8.5 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM11.5 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </svg>
);
export default SvgSpeechBubbleActive;
