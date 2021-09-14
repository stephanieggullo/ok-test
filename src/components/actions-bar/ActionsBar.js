import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ActionsBar.module.scss';

const ActionsBar = () => {
  return (
    <div className={styles.container}>
      <Link to='/instructions'>
        <button className={`${styles.btn} ${styles['cancel-btn']}`}>
          Cancelar
        </button>
      </Link>
      <Link to='/form'>
        <button className={`${styles.btn} ${styles['continue-btn']}`}>
          Siguiente <div className={styles['continue-btn_icon']}></div>
        </button>
      </Link>
    </div>
  );
};

export default ActionsBar;
