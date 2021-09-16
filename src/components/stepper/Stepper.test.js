import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { wizardReducer } from '../../store';
import Stepper from './Stepper';

const renderComponent = (reduxState) => {
  const store = createStore(wizardReducer, reduxState);
  const history = {
    history: { push: jest.fn(), location: {}, listen: jest.fn() },
  };
  return render(
    <Router history={history.history}>
      <Provider store={store}>
        <Stepper />
      </Provider>
    </Router>
  );
};

describe('Stepper in the first step', () => {
  beforeEach(() => {
    renderComponent();
  });

  test('Should render step one as current when store has empty', () => {
    const button = screen.getByText('1');
    expect(button).toHaveClass('item-active');
  });
});

describe('Stepper in the second step', () => {
  beforeEach(() => {
    renderComponent({ step: { step: 2 } });
  });

  test('Should render step two as current when store has it as a value', () => {
    const button = screen.getByText('2');
    expect(button).toHaveClass('item-active');
  });
});
