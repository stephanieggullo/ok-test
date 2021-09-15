import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ActionsBar.module.scss';
import arrow from '../../assets/img/arrow.svg';

const ActionsBar = (props) => {
  const handleNextBtn = () => {
    props.onClickContinue();
  };

  return (
    <div className={styles.container}>
      <Link to='/wizard'>
        <button className={`${styles.btn} ${styles['cancel-btn']}`}>
          Cancelar
        </button>
      </Link>
      <button
        disabled={props.disabled}
        className={`${styles.btn} ${styles['continue-btn']}`}
        onClick={handleNextBtn}
      >
        Siguiente
        <img src={arrow} alt='arrow' className={styles['continue-btn_icon']} />
      </button>
    </div>
  );
};

export default ActionsBar;
