import React from "react";
import styles from "./styles.scss";

export const StyledList = ({ children }) => {
  return <div className={styles.styledList}>{children}</div>;
};