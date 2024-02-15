import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from '../maps';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={Index} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;