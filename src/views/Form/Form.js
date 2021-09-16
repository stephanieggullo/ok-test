import React, { Fragment, useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { wizardActions } from '../../store';
import styles from './Form.module.scss';
import eyeIcon from '../../assets/img/eye-icon-private.svg';
import eyeIconVisibility from '../../assets/img/eye-icon.svg';
import ActionsBar from '../../components/actions-bar/ActionsBar';
import { submitForm } from '../../services/api';

const Form = () => {
  const store = useSelector((state) => state.step);
  const step = store && store.step;
  const dispatch = useDispatch();
  const history = useHistory();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [passwordVisibility, setPasswordVisibility] = useState();
  const [disabled, setDisabled] = useState(true);
  const [errorPassword, setErrorPassword] = useState();
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState();
  const [loading, setLoading] = useState();
  const [progressBarStyles, setProgressBarStyles] = useState({});
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!step) {
      history.push('/wizard');
    }
  }, [step, history]);

  const handlePasswordVisibility = () => {
    setPasswordVisibility((prevValue) => !prevValue);
  };

  const handlePasswordValidity = () => {
    const value = passwordRef.current.value;
    if (!!value) {
      setErrors(value);
    } else {
      clearErrors();
      setDisabled(true);
    }
  };

  const matchPassword = () => {
    const confirmPasswordValue = confirmPasswordRef.current.value;
    return (
      !!confirmPasswordValue &&
      passwordRef.current.value === confirmPasswordValue
    );
  };

  const setErrors = (value) => {
    const valueLength = passwordRef.current.value.trim().length;
    const upperCase = /[A-Z]/.test(value);
    const number = /[0-9]/.test(value);
    if (valueLength < 6 || valueLength > 24) {
      setErrorPassword('Debe tener entre 6 y 24 caracteres');
    } else if (!upperCase) {
      setErrorPassword('Debe contener al menos una mayúscula');
    } else if (!number) {
      setErrorPassword('Debe contener al menos un número');
    } else if (!matchPassword()) {
      setErrorPasswordConfirm('No coincide con la contraseña');
      setErrorPassword(null);
    } else {
      setDisabled(false);
      clearErrors();
    }
  };

  const clearErrors = () => {
    if (matchPassword()) {
      setErrorPassword(null);
      setErrorPasswordConfirm(null);
    }
  };

  const onClickCancel = () => {
    history.push('/wizard');
  };

  const onClickContinue = async () => {
    setLoading(true);
    try {
      await submitForm();
      goNextStep('success');
    } catch {
      goNextStep('error');
    }
  };

  const goNextStep = (res) => {
    dispatch(wizardActions.setFeedback({ type: 'feedback', feedback: res }));
    history.push('/feedback');
  };

  const passworSecurity = () => {
    const value = passwordRef.current.value;
    const strong = new RegExp(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
    );
    const medium = new RegExp('((?=.*[A-Z])(?=.*[0-9])(?=.{6,}))');
    if (strong.test(value)) {
      setProgressBarStyles({ width: '100%', backgroundColor: '#fc844c' });
      clearErrors();
    } else if (medium.test(value)) {
      setProgressBarStyles({ width: '60%', backgroundColor: '#fc844c' });
      clearErrors();
    } else if (!!value) {
      setProgressBarStyles({ width: '30%', backgroundColor: '#fc844c' });
    } else {
      setProgressBarStyles({ display: 'none' });
    }
  };

  const handleCounter = (event) => {
    const value = event.target.value.length;
    setCounter(value);
  };

  return (
    <Fragment>
      <section>
        <h1 className='title-text'>Crea tu Password Manager</h1>
        <div className='title-border'></div>
        <p className={styles['instructions']}>
          En primer lugar, debes crear una contraseña diferente para sus
          pertenencias electrónicas. No podrás recuperar tu contraseña, así que
          recuérdala bien.
        </p>
        <form>
          <fieldset className='form-fieldset'>
            <div className={styles['form-group']}>
              <div>
                <label htmlFor='password' className={styles['form-label']}>
                  Crea tu contraseña Maestra
                </label>
                <div className={styles['form-input_box']}>
                  <input
                    ref={passwordRef}
                    type={passwordVisibility ? 'text' : 'password'}
                    autoComplete='off'
                    id='password'
                    placeholder='Crea tu contraseña'
                    className={`${styles['form-input_input']} ${
                      styles['form-input_input-pwd']
                    } ${errorPassword ? styles['form-input_error'] : ''}`}
                    onBlur={handlePasswordValidity}
                    onChange={passworSecurity}
                  />
                  <div className={styles['form-input_meter-box']}>
                    <div
                      className={styles['form-input_meter-content']}
                      style={progressBarStyles}
                    ></div>
                  </div>
                  {errorPassword && (
                    <span className={styles['form-group_error']}>
                      {errorPassword}
                    </span>
                  )}
                  <img
                    src={passwordVisibility ? eyeIconVisibility : eyeIcon}
                    alt='Password'
                    className={styles['form-input_icon']}
                    onClick={handlePasswordVisibility}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='confirm-password'
                  className={styles['form-label']}
                >
                  Repite tu contraseña Maestra
                </label>
                <div className={styles['form-input_box']}>
                  <input
                    ref={confirmPasswordRef}
                    type={passwordVisibility ? 'text' : 'password'}
                    autoComplete='off'
                    id='confirm-password'
                    placeholder='Repite tu contraseña'
                    className={`${styles['form-input_input']} ${
                      styles['form-input_input-pwd']
                    } ${
                      errorPasswordConfirm ? styles['form-input_error'] : ''
                    }`}
                    onBlur={handlePasswordValidity}
                  />
                  <img
                    src={passwordVisibility ? eyeIconVisibility : eyeIcon}
                    alt='Password'
                    className={styles['form-input_icon']}
                    onClick={handlePasswordVisibility}
                  />
                  {errorPasswordConfirm && (
                    <span className={styles['form-group_error']}>
                      {errorPasswordConfirm}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className={styles['instructions']}>
              <p>
                También puedes crear una pista que te ayude a recordar tu
                contraseña maestra.
              </p>
            </div>
            <div
              className={`${styles['form-group']} ${styles['form-group_textarea']}`}
            >
              <label htmlFor='track' className={styles['form-label']}>
                Crea tu pista para recordar tu contraseña (opcional)
              </label>
              <input
                type='text'
                id='track'
                placeholder='Introduce tu pista'
                className={styles['form-input_input']}
                maxLength='255'
                onChange={handleCounter}
              />
              <span className={styles['form-input_counter']}>
                {counter}/255
              </span>
            </div>
          </fieldset>
        </form>
      </section>
      <ActionsBar
        disabled={disabled}
        loading={loading}
        onClickContinue={onClickContinue}
        onClickCancel={onClickCancel}
      />
    </Fragment>
  );
};

export default Form;
