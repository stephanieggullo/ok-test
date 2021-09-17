import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Wizard from './components/wizard/Wizard';
import Feedback from './views/Feedback/Feedback';

const App = () => {
  return (
    <main>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/wizard' />
        </Route>
        <Route path='/wizard'>
          <Wizard />
        </Route>
        <Route path='/feedback'>
          <Feedback />
        </Route>
        <Route path='*' exact>
          <Redirect to='/wizard' />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
