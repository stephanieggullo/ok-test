import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { wizardReducer } from '../../store';
import Instructions from './Instructions';

const renderComponent = (reduxState) => {
  const store = createStore(wizardReducer, reduxState);
  const history = {
    history: { push: jest.fn(), location: {}, listen: jest.fn() },
  };
  return render(
    <Router history={history.history}>
      <Provider store={store}>
        <Instructions />
      </Provider>
    </Router>
  );
};

describe('Instructions', () => {
  beforeEach(() => {
    renderComponent();
  });

  test('Should render the functionality instructions', () => {
    const subtitle = screen.getByText('Cómo funciona');
    const text = screen.getByText(
      'En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien.'
    );
    expect(subtitle).toBeDefined();
    expect(text).toBeDefined();
  });

  test('Should render two instruction images', () => {
    const images = screen.getAllByRole('img');
    const firstImage = screen.getByAltText('Password saver');
    const secondImage = screen.getByAltText('Safe box');

    expect(firstImage).toBeDefined();
    expect(secondImage).toBeDefined();
    expect(images).toHaveLength(2);
  });

  test('Should render continue button disabled when condition check is false', () => {
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.checked).toEqual(false);

    const button = screen.getByText('Siguiente');
    expect(button).toBeDisabled();
  });

  test('Should render continue button enable when condition has already checked', () => {
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);

    const button = screen.getByText('Siguiente');
    expect(button).not.toBeDisabled();
  });
});
