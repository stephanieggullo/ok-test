import React, { useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Summary from '../../components/summary/Summary';
import ActionsBar from '../../components/actions-bar/ActionsBar';

const Feedback = () => {
  const store = useSelector((state) => state.feedback);
  const history = useHistory();
  const feedback = store && store.feedback;
  const isSuccess = feedback === 'success';
  const title = isSuccess
    ? '¡Tu Password Manager ya está creado!'
    : 'Ha habido un error';
  const textInfo = isSuccess
    ? 'Se ha podido crear tu contraseña maestra con exito.'
    : 'No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde.';
  const btnText = isSuccess ? 'Acceder' : 'Volver a Password Manager';

  useEffect(() => {
    if (!feedback) {
      history.push('/wizard');
    }
  }, [feedback, history]);

  const onClickContinue = () => {
    history.push('/wizard');
  };

  return (
    <Fragment>
      <section>
        <Summary type={feedback} title={title} textInfo={textInfo}></Summary>
      </section>
      <ActionsBar
        onClickContinue={onClickContinue}
        type='feedback'
        text={btnText}
      />
    </Fragment>
  );
};

export default Feedback;
