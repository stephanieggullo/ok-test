import React from 'react';
import styles from './Instructions.module.scss';
import group from '../../assets/img/group.svg';
import group3 from '../../assets/img/group-3.svg';

const Instructions = () => {
  return (
    <section>
      <h1 className='title-text'>Crea tu Password Manager</h1>
      <div className='title-border'></div>
      <div className={styles['instructions-container']}>
        <div className={styles['instructions-box']}>
          <div className={styles['instructions-image']}>
            <img src={group} width='195px' alt='Password saver' />
          </div>
          <p>
            Guarda aquí todas tus contraseñas, datos o cualquier información,
            olvida las notas de papel y las aplicaciones no protegidas.
          </p>
        </div>
        <div className={styles['instructions-box']}>
          <div className={styles['instructions-image']}>
            <img src={group3} width='170px' alt='Safe box' />
          </div>
          <p>
            Crea tu clave maestra: solo tú podrás acceder a tus secretos con
            ella.
          </p>
        </div>
      </div>
      <div className={styles['box-info']}>
        <h2>Cómo funciona</h2>
        <p>
          En primer lugar, debes crear una contraseña diferente para sus
          pertenencias electrónicas. No podrás recuperar tu contraseña, así que
          recuérdala bien.
        </p>
      </div>
      <div className={styles['box-info']}>
        <h2>Qué datos puedes guardar</h2>
        <p>
          Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono
          móvil, el número de serie de alguno de tus dispositivos o cualquier
          información que necesites tener en lugar seguro.
        </p>
      </div>
    </section>
  );
};

export default Instructions;
