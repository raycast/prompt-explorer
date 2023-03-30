import * as React from "react";
import { SVGProps } from "react";
const SvgBug = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.5 7.25v0a1.75 1.75 0 0 0 1.75-1.75V3.75m-12.5 0V5.5c0 .966.784 1.75 1.75 1.75m10.75 6V11.5a1.75 1.75 0 0 0-1.75-1.75m-10.75 3.5V11.5c0-.966.784-1.75 1.75-1.75m7.883 2.034C10.826 10.829 9.668 9.75 8 9.75s-2.826 1.079-3.383 2.034m6.766 0c.544-1.05.867-2.362.867-3.784 0-3.452-1.903-6.25-4.25-6.25S3.75 4.548 3.75 8c0 1.422.323 2.733.867 3.784m6.766 0C10.607 13.283 9.38 14.25 8 14.25s-2.607-.967-3.383-2.466"
    />
  </svg>
);
export default SvgBug;
