import React from "react";

export function Search({...other}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...other}
    >
      <path
        fill="currentColor"
        d="M6.685 2.054a5 5 0 013.984 8.028l3.166 3.16a.666.666 0 01-.88.998l-.062-.055-3.167-3.159A4.999 4.999 0 011.745 6.32a5 5 0 014.94-4.266zm.001 1.333a3.667 3.667 0 10.008 7.333 3.667 3.667 0 00-.008-7.333z"
      ></path>
    </svg>
  );
}