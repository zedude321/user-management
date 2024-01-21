import React from "react";

export function BarChart({...other}) {
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
        d="M3 22V8h4v14H3zm7 0V2h4v20h-4zm7 0v-8h4v8h-4z"
      ></path>
    </svg>
  );
}