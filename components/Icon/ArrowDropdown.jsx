import React from "react";

function ArrowDropdown({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        fill={color ?? "#fff"}
        d="M8.12 9.35L12 13.23l3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0L6.7 10.76a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
      ></path>
    </svg>
  );
}

export default ArrowDropdown;
