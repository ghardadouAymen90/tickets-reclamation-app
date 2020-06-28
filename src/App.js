import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './components/landingPage/landingPage'
import Login from './components/login/login';
import Reclamer from './components/Collaborators/writeReclam';
import Consulter from './components/Collaborators/consultReclam';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/landing" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/collaborateur/reclamer" component={Reclamer} />
        <Route path="/collaborateur/VoirTickets" component={Consulter} />
      </Switch>
    </Router>
  );
}

export default App;
