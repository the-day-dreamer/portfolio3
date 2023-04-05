import * as React from "react";
const SVGComponent = (props) => (
  <svg

    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 7H20M4 12H20M4 17H20"
      stroke="#001A72"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
