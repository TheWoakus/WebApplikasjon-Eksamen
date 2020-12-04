import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';

import Fagartikler from '../pages/Fagartikler';
import Hjem from '../pages/Hjem';
import Kontakt from '../pages/Kontakt';
import Kontorer from '../pages/Kontorer';
import Logginn from '../pages/Logginn';

import Header from '../components/Header'

const Routes = () => (
  
  <Router>
	  <Header />
      <Switch>
        <Route exact path="/">
          <Hjem />
        </Route>
          <Route exact path="/kontorer/">
            <Kontorer />
          </Route>
        <Route exact path="/fagartikler/">
          <Fagartikler />
        </Route>        
        <Route exact path="/kontakt/">
          <Kontakt />
        </Route>
        <Route exact path="/logginn/">
          <Logginn />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
  </Router>
);

export default Routes;
