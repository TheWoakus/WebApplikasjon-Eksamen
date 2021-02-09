import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NoMatch from '../pages/NoMatch.jsx';

import Hjem from '../pages/Hjem.jsx';
import Logginn from '../pages/Logginn.jsx';
import Registrer from '../pages/Registrer.jsx';
import Bruker from '../pages/Bruker.jsx';
import Verk from '../pages/Verk.jsx';


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Hjem />
      </Route>
			<Route exact path="/logginn/">
				<Logginn />
			</Route>
			<Route exact path="/registrer/">
				<Registrer />
			</Route>
			<Route exact path="/bruker/">
				<Bruker />
			</Route>
			<Route exact path="/verk/">
				<Verk />
			</Route>			
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
