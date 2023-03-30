import * as React from "react";
import { SVGProps } from "react";
const SvgAirplaneLanding = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.643 6.646 1.415.514c.912.332 1.405 1.276 1.103 2.11-.302.834-1.287 1.241-2.198.91l-2.358-.857-4.29 1.775a2.105 2.105 0 0 1-1.517.02l-2.048-.744 4.081-2.422-4.009-1.457 1.72-4.745.957.348c.715.26 1.234.866 1.342 1.567l.142.925 2.83 1.028m2.83 1.028-.002-.927c-.002-1.196-.825-2.302-2.043-2.745l-.79-.287.005 2.93m2.83 1.03-2.83-1.03M1.75 14.25h12.5"
    />
  </svg>
);
export default SvgAirplaneLanding;
