import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { wizardActions } from '../../store';
import styles from './Instructions.module.scss';
import group from '../../assets/img/group.svg';
import group3 from '../../assets/img/group-3.svg';
import ActionsBar from '../../components/actions-bar/ActionsBar';
import { useTranslation } from 'react-i18next';

const Instructions = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const privacityCheckRef = useRef();
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(wizardActions.setStep({ type: 'step', step: null }));
  }, [dispatch]);

  const handleStepValidity = () => {
    const validForm = privacityCheckRef.current.checked;
    setDisabled(!validForm);
  };

  const onClickContinue = () => {
    dispatch(wizardActions.setStep({ type: 'step', step: 2 }));
    history.push('/wizard/form');
  };

  const onClickCancel = () => {
    history.push('/wizard');
  };

  return (
    <Fragment>
      <section>
        <h1 className='title-text'>{t('title')}</h1>
        <div className='title-border'></div>
        <div className={styles['instructions-container']}>
          <div className={styles['instructions-box']}>
            <div className={styles['instructions-image']}>
              <img src={group} width='195px' alt='Password saver' />
            </div>
            <p>{t('instructions_password_saver')}</p>
          </div>
          <div className={styles['instructions-box']}>
            <div className={styles['instructions-image']}>
              <img src={group3} width='170px' alt='Safe box' />
            </div>
            <p>{t('instructions_password_save_box')}</p>
          </div>
        </div>
        <div className={styles['box-info']}>
          <h2>{t('funcionality_title')}</h2>
          <p>{t('funcionality_description')}</p>
        </div>
        <div className={styles['box-info']}>
          <h2>{t('data_save_title')}</h2>
          <p>{t('data_save_description')}</p>
        </div>
        <div className={styles['box-terms']}>
          <span> {t('terms_title')}</span>
          <div>
            <input
              ref={privacityCheckRef}
              type='checkbox'
              id='terms'
              onChange={handleStepValidity}
            />
            <label htmlFor='terms' className={styles.label}>
              {t('terms_description')}
            </label>
          </div>
        </div>
      </section>
      <ActionsBar
        disabled={disabled}
        onClickContinue={onClickContinue}
        onClickCancel={onClickCancel}
      />
    </Fragment>
  );
};

export default Instructions;
