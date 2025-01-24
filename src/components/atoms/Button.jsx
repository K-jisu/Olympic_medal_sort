import React from "react";
import styles from "../styles/button.module.css/";

const Button = ({ type, content, name, onClick, className }) => {
  const clsName = className === "addbtn" ? styles.addbtn : styles.removebtn;

  return (
    <>
      <button className={clsName} type={type} name={name} onClick={onClick}>
        {content}
      </button>
    </>
  );
};

export default Button;
