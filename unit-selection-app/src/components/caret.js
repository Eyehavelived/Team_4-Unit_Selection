import React from "react";
//This Caret is used to expand the div for Faculty,Year,Semester
function Caret(props) {
  return (
    <svg
      className={props.className}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192 400"
    >
      <path
        fill={props.fill}
        d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
      ></path>
    </svg>
  );
}

export default Caret;

