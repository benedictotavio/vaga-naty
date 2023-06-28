import React from "react";
import styles from "./CarMoving.module.css";

const CarMoving = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carAnimation}>
        <div className={styles.road}></div>
        <div className={styles.car}>
          <div className={styles.colour}></div>
          <div className={styles.windows}></div>
          <div className={styles.leftWheel}>
            <div className={styles.wheel}></div>
          </div>
          <div className={styles.rightWheel}>
            <div className={styles.wheel}></div>
          </div>
        </div>
        <div className={styles.clouds}></div>
      </div>
    </div>
  );
};

export default CarMoving;
