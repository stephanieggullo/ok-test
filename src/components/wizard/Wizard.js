import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Stepper from '../stepper/Stepper';
import Instructions from '../../views/instructions/Instructions';
import Form from '../../views/form/Form';

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
      </Switch>
    </div>
  );
};

export default Wizard;
