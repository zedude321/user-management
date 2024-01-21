import React from "react";

export function Command({...other}) {
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
        stroke="currentColor"
        strokeWidth="0.3"
        d="M8.934 3.066A4.15 4.15 0 106 10.15h1.85v3.7H6A4.15 4.15 0 1010.15 18v-1.85h3.7V18A4.15 4.15 0 1018 13.85h-1.85v-3.7H18A4.15 4.15 0 1013.85 6v1.85h-3.7V6a4.15 4.15 0 00-1.216-2.934zm7.758 16.242A1.85 1.85 0 0116.15 18v-1.85H18a1.85 1.85 0 11-1.308 3.158zM10.15 13.85v-3.7h3.7v3.7h-3.7zm-5.458 2.842A1.85 1.85 0 016 16.15h1.85V18a1.85 1.85 0 11-3.158-1.308zm2.616-12c.347.347.542.817.542 1.308v1.85H6a1.85 1.85 0 111.308-3.158zm12 2.616A1.85 1.85 0 0118 7.85h-1.85V6a1.85 1.85 0 113.158 1.308z"
      ></path>
    </svg>
  );
}