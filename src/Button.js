import React from "react";
import "./styles.css";

const Button = props => {
  return (
    <button
      className={props.children === "=" ? "result" : "btn"}
      onClick={() => {
        props.oper(props.children);
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
