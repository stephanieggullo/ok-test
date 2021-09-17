import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { wizardReducer } from '../../store';
import Feedback from './Feedback';
import i18n from '../../locale/i18n';

const renderComponent = (reduxState) => {
  const store = createStore(wizardReducer, reduxState);
  const history = {
    history: { push: jest.fn(), location: {}, listen: jest.fn() },
  };
  return render(
    <Router history={history.history}>
      <Provider store={store}>
        <Feedback />
      </Provider>
    </Router>
  );
};

describe('Feedback success', () => {
  beforeEach(() => {
    renderComponent({ feedback: { feedback: 'success' } });
  });

  test('Should render a successful text and icon when the request has been successful', () => {
    const title = screen.getByText(i18n.t('feedback_success_title'));
    const icon = screen.getByAltText('success');
    expect(title).toBeDefined();
    expect(icon).toBeDefined();
  });
});

describe('Feedback error', () => {
  beforeEach(() => {
    renderComponent({ feedback: { feedback: 'error' } });
  });

  test('Should render an error text and icon when the request has failed', () => {
    const title = screen.getByText(i18n.t('feedback_error_title'));
    const icon = screen.getByAltText('error');
    expect(title).toBeDefined();
    expect(icon).toBeDefined();
  });
});

describe('Feedback redirect', () => {
  let history;
  beforeEach(() => {
    const store = createStore(wizardReducer, {});
    history = {
      history: { push: jest.fn(), location: {}, listen: jest.fn() },
    };
    return render(
      <Router history={history.history}>
        <Provider store={store}>
          <Feedback />
        </Provider>
      </Router>
    );
  });

  test('Should redirect to init page when store is empty', () => {
    expect(history.history.push).toBeCalledWith('/wizard');
  });
});
