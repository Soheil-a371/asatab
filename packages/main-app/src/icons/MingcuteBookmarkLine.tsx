import React, { SVGProps } from "react";

export function MingcuteBookmarkLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path
          stroke="currentColor"
          strokeWidth="1"
          d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14.066a.5.5 0 0 1-.777.416l-4.946-3.297a.5.5 0 0 0-.554 0l-4.946 3.297A.5.5 0 0 1 6 20.066z"
        />
      </g>
    </svg>
  );
}
export default MingcuteBookmarkLine;