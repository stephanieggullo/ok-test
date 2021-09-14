import React, { Fragment } from 'react';
import './App.scss';
import Stepper from './components/stepper/Stepper';
import Instructions from './views/instructions/Instructions';

const App = () => {
  return (
    <Fragment>
      <Stepper />
      <main>
        <Instructions />
      </main>
    </Fragment>
  );
};

export default App;
