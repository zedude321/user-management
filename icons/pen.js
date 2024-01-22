import React from "react";

export function Pen({...other}) {
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
        d="M5.086 13.228l2.48-.226 4.667-4.67-2.247-2.248-4.68 4.68-.22 2.464zm6.017-8.26l2.246 2.246 1.622-1.625-2.245-2.245-1.623 1.624zm-7.526 9.77a.836.836 0 01-.24-.665l.315-3.475c.035-.38.204-.74.475-1.012l7.497-7.496c.585-.588 1.646-.559 2.263.057L16.17 4.43c.638.639.664 1.654.057 2.262L8.73 14.19c-.271.27-.63.439-1.012.474l-3.475.316a.836.836 0 01-.665-.24zm13.09 2.743a.836.836 0 01-.834.834H4.166a.836.836 0 01-.833-.834c0-.457.376-.833.833-.833h11.667c.458 0 .833.376.833.833z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}