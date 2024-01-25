import React from "react";

export function Pencil({...other}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 17 17"
      {...other}
    >
      <g clipPath="url(#clip0_111_962)">
        <path
          fill="currentColor"
          d="M11.997.753l-9.252 9.252L.76 16.24l6.234-1.984 9.252-9.252s-.07-1.489-1.416-2.834C13.485.823 11.997.753 11.997.753zm.266 1.15c.76.145 1.364.467 1.83.946.467.478.795 1.114 1.003 1.888l-1.284 1.284-2.833-2.833 1.018-1.019.266-.265zm-8.737 8.812c.009.002.852.215 1.698 1.061.92.85 1.062 1.63 1.062 1.63l.03.036-2.513.81-1.06-1.06.783-2.477z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_111_962">
          <path fill="#fff" d="M0 0H17V17H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}