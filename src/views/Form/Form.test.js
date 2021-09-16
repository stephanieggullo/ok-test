import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { wizardReducer } from '../../store';
import Form from './Form';

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
    const passwordInput = screen.getByLabelText('Crea tu contraseña Maestra');
    const confirmPasswordInput = screen.getByLabelText(
      'Repite tu contraseña Maestra'
    );
    const trackInput = screen.getByLabelText(
      'Crea tu pista para recordar tu contraseña (opcional)'
    );

    expect(passwordInput).toBeDefined();
    expect(confirmPasswordInput).toBeDefined();
    expect(trackInput).toBeDefined();
  });

  test('Should render input error message and button disabled when the password is invalid.', () => {
    const input = screen.getByLabelText('Crea tu contraseña Maestra');
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(input.value).toBe('abc');
    fireEvent.blur(input);
    const error = screen.getByText('Debe tener entre 6 y 24 caracteres');

    const button = screen.getByText('Siguiente');
    expect(button).toBeDisabled();

    expect(error).toBeDefined();
  });

  test('Should render continue button enable when password is valid', () => {
    const passwordInput = screen.getByLabelText('Crea tu contraseña Maestra');
    const confirmPasswordInput = screen.getByLabelText(
      'Repite tu contraseña Maestra'
    );

    fireEvent.change(passwordInput, { target: { value: 'Abcdef1' } });
    fireEvent.blur(passwordInput);
    fireEvent.change(confirmPasswordInput, { target: { value: 'Abcdef1' } });
    expect(confirmPasswordInput.value).toBe('Abcdef1');
    fireEvent.blur(confirmPasswordInput);

    const button = screen.getByText('Siguiente');
    expect(button).not.toBeDisabled();
  });
});
