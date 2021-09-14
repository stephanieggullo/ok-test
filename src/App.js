import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Stepper from './components/stepper/Stepper';
import Instructions from './views/instructions/Instructions';
import Form from './views/form/Form';
import ActionsBar from './components/actions-bar/ActionsBar';

const App = () => {
  return (
    <Fragment>
      <Stepper />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/instructions' />
          </Route>
          <Route path='/instructions'>
            <Instructions />
          </Route>
          <Route path='/form' exact>
            <Form />
          </Route>
        </Switch>
      </main>
      <ActionsBar />
    </Fragment>
  );
};

export default App;
