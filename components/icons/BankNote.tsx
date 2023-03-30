import * as React from "react";
import { SVGProps } from "react";
const SvgBankNote = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 4.173c3 1.051 6.25 0 6.25 0v7.61s-3.25 1.051-6.25 0m0-7.61c-3-.952-6.25 0-6.25 0v7.61s3.25-.952 6.25 0m0-7.61C6.922 4.003 5.75 6.205 5.75 8S6.766 11.613 8 11.783m0-7.61c1.078.17 2.25 2.032 2.25 3.827S9.234 11.953 8 11.783"
    />
  </svg>
);
export default SvgBankNote;
