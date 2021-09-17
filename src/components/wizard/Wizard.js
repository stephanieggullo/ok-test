import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Stepper from '../stepper/Stepper';
import Instructions from '../../views/Instructions/Instructions';
import Form from '../../views/Form/Form';

const Wizard = () => {
  return (
    <div className='box-section'>
      <Stepper />
      <Switch>
        <Route path='/wizard' exact>
          <Instructions />
        </Route>
        <Route path='/wizard/form'>
          <Form />
        </Route>
        <Route path='*' exact>
          <Redirect to='/wizard' />
        </Route>
      </Switch>
    </div>
  );
};

export default Wizard;
