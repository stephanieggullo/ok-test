import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { wizardReducer } from '../../store';
import Instructions from './Instructions';
import i18n from '../../locale/i18n';

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
    const subtitle = screen.getByText(i18n.t('funcionality_title'));
    const text = screen.getByText(i18n.t('funcionality_description'));
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

    const button = screen.getByText(i18n.t('continue_btn'));
    expect(button).toBeDisabled();
  });

  test('Should render continue button enable when condition has already checked', () => {
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);

    const button = screen.getByText(i18n.t('continue_btn'));
    expect(button).not.toBeDisabled();
  });
});
