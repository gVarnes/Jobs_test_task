import React from "react";
import styles from "./index.module.scss";

const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
