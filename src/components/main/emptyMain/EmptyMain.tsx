import React from "react";
import styles from "./EmptyMain.module.css";
export const EmprtyMain = () => {
  return (
    <div>
      <h2 className={styles.title}>Hello</h2>
      <p className={styles.text}>
        You are on the main page of serching film, please, enter the field
      </p>
    </div>
  );
};
