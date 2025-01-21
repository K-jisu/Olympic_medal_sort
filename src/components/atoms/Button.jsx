import React from "react";

const Button = ({ type, content, name, event}) => {
  return (
    <>
      <button type={type} name={name} onClick={event}>
        {content}
      </button>
    </>
  );
};

export default Button;
