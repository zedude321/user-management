import React from "react";

export function ArrowDown({...other}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...other}
    >
      <path
        fill="currentColor"
        d="M7.478 9.3l4.594 4.586 4.586-4.595 1.411 1.419-5.994 6.006-6.006-5.994 1.409-1.421z"
      ></path>
    </svg>
  );
}