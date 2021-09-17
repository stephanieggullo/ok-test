import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { wizardReducer } from '../../store';
import Form from './Form';
import i18n from '../../locale/i18n';

const renderComponent = () => {
  const store = createStore(wizardReducer, { step: { step: 2 } });
  const history = {
    history: { push: jest.fn(), location: {}, listen: jest.fn() },
  };
  return render(
    <Router history={history.history}>
      <Provider store={store}>
        <Form />
      </Provider>
    </Router>
  );
};

describe('Password management form', () => {
  beforeEach(() => {
    renderComponent();
  });

  test('Should render three form inputs', () => {
    const passwordInput = screen.getByLabelText(i18n.t('create_password'));
    const confirmPasswordInput = screen.getByLabelText(
      i18n.t('repeat_password')
    );
    const trackInput = screen.getByLabelText(i18n.t('create_hint'));

    expect(passwordInput).toBeDefined();
    expect(confirmPasswordInput).toBeDefined();
    expect(trackInput).toBeDefined();
  });

  test('Should render input error message and button disabled when the password is invalid.', () => {
    const input = screen.getByLabelText(i18n.t('create_password'));
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(input.value).toBe('abc');
    fireEvent.blur(input);
    const error = screen.getByText(i18n.t('form_error_length'));

    const button = screen.getByText(i18n.t('continue_btn'));
    expect(button).toBeDisabled();
    expect(error).toBeDefined();
  });

  test('Should render continue button enable when password is valid', () => {
    const passwordInput = screen.getByLabelText(i18n.t('create_password'));
    const confirmPasswordInput = screen.getByLabelText(
      i18n.t('repeat_password')
    );

    fireEvent.change(passwordInput, { target: { value: 'Abcdef1' } });
    fireEvent.blur(passwordInput);
    fireEvent.change(confirmPasswordInput, { target: { value: 'Abcdef1' } });
    expect(confirmPasswordInput.value).toBe('Abcdef1');
    fireEvent.blur(confirmPasswordInput);

    const button = screen.getByText(i18n.t('continue_btn'));
    expect(button).not.toBeDisabled();
  });
});
