import React from 'react';
import styles from './Stepper.module.scss';
import { useSelector } from 'react-redux';

const Stepper = () => {
  const store = useSelector((state) => state.step);
  const step = store && store.step;

  return (
    <div className={styles.container}>
      <div
        className={`${styles.item} ${
          styles[!step ? 'item-active' : 'item-checked']
        }`}
      >
        {!step ? 1 : ''}
      </div>
      <div className={styles.separator}></div>
      <div className={`${styles.item} ${styles[!step ? '' : 'item-active']}`}>
        2
      </div>
      <div className={styles.separator}></div>
      <div className={styles.item}> 3 </div>
    </div>
  );
};

export default Stepper;
