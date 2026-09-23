import React, { SVGProps } from "react";

export function MingcuteEye2Line(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        d="M21 12c0 1.5-4.03 6-9 6s-9-4.5-9-6s4.03-6 9-6s9 4.5 9 6Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"
      />
    </svg>
  );
}
export default MingcuteEye2Line;