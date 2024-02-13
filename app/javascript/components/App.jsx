// 例えば、app/frontend/components/App.js にこのファイルがあるとする

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;