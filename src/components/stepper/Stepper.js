import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Stepper.module.scss';

const Stepper = () => {
  const location = useLocation();
  const [firstStep, setFirstStep] = useState(true);

  useEffect(() => {
    const step2 = location.pathname.includes('form');
    setFirstStep(!step2);
  }, [location]);
  return (
    <div className={styles.container}>
      <div
        className={`${styles.item} ${
          styles[firstStep ? 'item-active' : 'item-checked']
        }`}
      >
        {firstStep ? 1 : ''}
      </div>
      <div className={styles.separator}></div>
      <div
        className={`${styles.item} ${styles[firstStep ? '' : 'item-active']}`}
      >
        2
      </div>
      <div className={styles.separator}></div>
      <div className={styles.item}> 3 </div>
    </div>
  );
};

export default Stepper;
