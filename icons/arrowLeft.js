import React from "react";

export function ArrowLeft({...other}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
      {...other}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 5.591H1M6 10.591l-5-5 5-5"
      ></path>
    </svg>
  );
}