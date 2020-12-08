import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch.jsx';

import Fagartikler from '../pages/Fagartikler.jsx';
import Hjem from '../pages/Hjem.jsx';
import Kontakt from '../pages/Kontakt.jsx';
import Kontorer from '../pages/Kontorer.jsx';
import NyttKontor from '../pages/NyttKontor.jsx';
import Logginn from '../pages/Logginn.jsx';
import Registrer from '../pages/Registrer.jsx';
import NyArtikkel from '../pages/NyArtikkel.jsx';
import Artikkel from '../pages/Artikkel.jsx';

import MainHeader from '../components/MainHeader.jsx';

const Routes = () => (
  <Router>
    <MainHeader />
    <Switch>
      <Route exact path="/">
        <Hjem />
      </Route>
      <Route exact path="/kontorer/">
        <Kontorer />
      </Route>
      <Route exact path="/nyttkontor/">
        <NyttKontor />
      </Route>
      <Route exact path="/fagartikler/">
        <Fagartikler />
      </Route>
      <Route path="/article/:id">
        <Artikkel />
      </Route>
      <Route exact path="/kontakt/">
        <Kontakt />
      </Route>
      <Route exact path="/login/">
        <Logginn />
      </Route>
      <Route exact path="/registrer/">
        <Registrer />
      </Route>
      <Route exact path="/nyartikkel/">
        <NyArtikkel />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
