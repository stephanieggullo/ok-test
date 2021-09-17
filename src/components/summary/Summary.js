import React from 'react';
import styles from './Summary.module.scss';
import successIcon from '../../assets/img/success.svg';
import warningIcon from '../../assets/img/warning.svg';
import { useTranslation } from 'react-i18next';

const Summary = (props) => {
  const { t } = useTranslation();
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
        <h1 className='title-text'>{t(`${props.title}`)}</h1>
        <p className={styles['instructions']}>{t(`${props.textInfo}`)}</p>
      </div>
    </div>
  );
};

export default Summary;
