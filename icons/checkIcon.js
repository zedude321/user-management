import React from "react";

export function CheckIcon({...other}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...other}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.58 8.005l-3.807 5a.833.833 0 01-.658.329H9.11a.834.834 0 01-.655-.32l-2.027-2.59a.833.833 0 111.312-1.026L9.1 11.136l3.154-4.14a.834.834 0 011.325 1.009"
        clipRule="evenodd"
      ></path>
      <mask
        style={{ maskType: "alpha" }}
        width="8"
        height="8"
        x="6"
        y="6"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M13.58 8.005l-3.807 5a.833.833 0 01-.658.329H9.11a.834.834 0 01-.655-.32l-2.027-2.59a.833.833 0 111.312-1.026L9.1 11.136l3.154-4.14a.834.834 0 011.325 1.009"
          clipRule="evenodd"
        ></path>
      </mask>
    </svg>
  );
}