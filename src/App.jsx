import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppPage from './pages/App';

const App = () => (
  <Router>
    <Route path="/" exact component={AppPage} />
  </Router>
);

export default App;
