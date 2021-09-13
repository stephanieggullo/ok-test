import React from 'react';
import styles from './Stepper.module.scss';

const Stepper = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${styles['item-checked']}`}> </div>
      <div className={styles.separator}></div>
      <div className={`${styles.item} ${styles['item-active']}`}> 2 </div>
      <div className={styles.separator}></div>
      <div className={styles.item}> 3 </div>
    </div>
  );
};

export default Stepper;
