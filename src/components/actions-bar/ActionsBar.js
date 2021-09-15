import React, { Fragment } from 'react';
import styles from './ActionsBar.module.scss';

const ActionsBar = (props) => {
  const feedbackType = props.type === 'feedback';
  const handleNextBtn = () => {
    props.onClickContinue();
  };

  const handleCancelBtn = () => {
    props.onClickCancel();
  };

  return (
    <div
      className={`${styles.container} ${
        styles[feedbackType ? 'container-end' : 'container-center']
      }`}
    >
      {!feedbackType && (
        <Fragment>
          <button
            disabled={props.loading}
            className={`${styles.btn} ${styles['cancel-btn']}`}
            onClick={handleCancelBtn}
          >
            Cancelar
          </button>
          <button
            disabled={props.disabled || props.loading}
            className={`${styles.btn} ${styles['continue-btn']} ${styles['continue-btn-primary']}`}
            onClick={handleNextBtn}
          >
            {!props.loading && (
              <Fragment>
                Siguiente
                <span className={styles['continue-btn_icon']}></span>
              </Fragment>
            )}
            {props.loading && (
              <div className={styles['continue-btn_loading']}></div>
            )}
          </button>
        </Fragment>
      )}
      {feedbackType && (
        <button
          className={`${styles.btn} ${styles['continue-btn']} ${styles['continue-btn-secondary']}`}
          onClick={handleNextBtn}
        >
          {props.text}
          <span
            className={`${styles['continue-btn_icon']} ${styles['continue-btn_icon-primary']}`}
          ></span>
        </button>
      )}
    </div>
  );
};

export default ActionsBar;
