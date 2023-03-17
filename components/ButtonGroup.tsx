import React from "react";
import styles from "./ButtonGroup.module.css";

export function ButtonGroup({ children }) {
  return <span className={styles.buttonGroup}>{children}</span>;
}
