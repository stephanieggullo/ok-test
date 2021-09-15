import React, { Fragment } from 'react';
import styles from './ActionsBar.module.scss';
import arrow from '../../assets/img/arrow.svg';
import { useHistory } from 'react-router-dom';

const ActionsBar = (props) => {
  const history = useHistory();

  const handleNextBtn = () => {
    props.onClickContinue();
  };

  const handleCancelBtn = () => {
    history.push('/wizard');
  };

  return (
    <div className={styles.container}>
      <button
        disabled={props.loading}
        className={`${styles.btn} ${styles['cancel-btn']}`}
        onClick={handleCancelBtn}
      >
        Cancelar
      </button>
      <button
        disabled={props.disabled || props.loading}
        className={`${styles.btn} ${styles['continue-btn']}`}
        onClick={handleNextBtn}
      >
        {!props.loading && (
          <Fragment>
            Siguiente
            <img
              src={arrow}
              alt='arrow'
              className={styles['continue-btn_icon']}
            />
          </Fragment>
        )}
        {props.loading && (
          <div className={styles['continue-btn_loading']}></div>
        )}
      </button>
    </div>
  );
};

export default ActionsBar;
