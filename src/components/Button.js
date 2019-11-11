import React from "react";

const MARGIN_VALUE = "10px";

const Button = ({ text, primary = false, handle }) => {
  return (
    <button
      onClick={handle}
      style={{ marginRight: MARGIN_VALUE, marginLeft: MARGIN_VALUE }}
      className={`${primary && "button-primary"}`}
    >
      {text}
    </button>
  );
};

export default Button;
