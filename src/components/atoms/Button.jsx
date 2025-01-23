import React from "react";

const Button = ({ type, content, name, onClick}) => {
  return (
    <>
      <button type={type} name={name} onClick={onClick}>
        {content}
      </button>
    </>
  );
};

export default Button;
