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
  const title = isSuccess ? 'feedback_success_title' : 'feedback_error_title';
  const textInfo = isSuccess
    ? 'feedback_success_description'
    : 'feedback_error_description';
  const btnText = isSuccess ? 'access_btn' : 'go_back_btn';

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
