import React, { Fragment, useState } from 'react';
import styles from './Form.module.scss';
import eyeIcon from '../../assets/img/eye-icon-private.svg';
import eyeIconVisibility from '../../assets/img/eye-icon.svg';
import ActionsBar from '../../components/actions-bar/ActionsBar';

const Form = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisibility((prevValue) => !prevValue);
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
                    type={passwordVisibility ? 'text' : 'password'}
                    id='password'
                    placeholder='Crea tu contraseña'
                    className={`${styles['form-input_input']} ${styles['form-input_input-pwd']}`}
                  />
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
                    type={passwordVisibility ? 'text' : 'password'}
                    id='confirm-password'
                    placeholder='Repite tu contraseña'
                    className={`${styles['form-input_input']} ${styles['form-input_input-pwd']}`}
                  />
                  <img
                    src={passwordVisibility ? eyeIconVisibility : eyeIcon}
                    alt='Password'
                    className={styles['form-input_icon']}
                    onClick={handlePasswordVisibility}
                  />
                </div>
              </div>
            </div>
            <div className={styles['instructions-container']}>
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
              />
            </div>
          </fieldset>
        </form>
      </section>
      <ActionsBar />
    </Fragment>
  );
};

export default Form;
