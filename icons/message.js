import React from "react";

export function Message({...other}) {
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
        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12zm-3-5h-2V9h2v2zm-4 0h-2V9h2v2zm-4 0H7V9h2"
      ></path>
    </svg>
  );
}