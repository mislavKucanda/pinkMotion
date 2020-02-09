import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { LoaderSquaresPage } from './pages/LoaderSquaresPage/LoaderSquaresPage';
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/loading/:nextPath" component={LoaderSquaresPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
