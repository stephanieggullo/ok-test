import React from 'react';
import styles from './Summary.module.scss';
import successIcon from '../../assets/img/success.svg';
import warningIcon from '../../assets/img/warning.svg';

const Summary = (props) => {
  const isSuccess = props.type === 'success';
  return (
    <div className={styles['feedback-container']}>
      {isSuccess && (
        <img
          src={successIcon}
          alt='success'
          className={styles['feedback-icon']}
        />
      )}
      {!isSuccess && (
        <img
          src={warningIcon}
          alt='error'
          className={styles['feedback-icon']}
        />
      )}
      <div>
        <h1 className='title-text'>{props.title}</h1>
        <p className={styles['instructions']}>{props.textInfo}</p>
      </div>
    </div>
  );
};

export default Summary;
