import * as React from "react";
const SVGComponent = (props) => (
  <svg
    viewBox="-3 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="moon-alt-7" transform="translate(-5 -2)">
      <path
        id="secondary"
        fill="#2ca9bc"
        d="M6,20.29A8.26,8.26,0,0,0,9.36,21,8.83,8.83,0,0,0,18,12,8.83,8.83,0,0,0,9.36,3,8.26,8.26,0,0,0,6,3.71,9,9,0,0,1,11.28,12,9,9,0,0,1,6,20.29Z"
      />
      <path
        id="primary"
        d="M6,20.29A8.26,8.26,0,0,0,9.36,21,8.83,8.83,0,0,0,18,12,8.83,8.83,0,0,0,9.36,3,8.26,8.26,0,0,0,6,3.71,9,9,0,0,1,11.28,12,9,9,0,0,1,6,20.29Z"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </g>
  </svg>
);
export default SVGComponent;


