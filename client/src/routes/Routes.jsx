import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NoMatch from '../components/NoMatch.jsx';

import Fagartikler from '../pages/Fagartikler.jsx';
import Hjem from '../pages/Hjem.jsx';
import Kontakt from '../pages/Kontakt.jsx';
import Kontorer from '../pages/Kontorer.jsx';
import Kontor from '../pages/Kontor.jsx';
import NyttKontor from '../pages/NyttKontor.jsx';
import Logginn from '../pages/Logginn.jsx';
import Registrer from '../pages/Registrer.jsx';
import NyArtikkel from '../pages/NyArtikkel.jsx';
import Artikkel from '../pages/Artikkel.jsx';
import Dashboard from '../pages/Dashboard.jsx';

import MainHeader from '../components/MainHeader.jsx';
import { useAuthContext } from '../context/AuthProvider.jsx';

const AuthenticatedRoutes = ({ children, ...rest }) => {
  const { isLoggedIn } = useAuthContext();

  return (
    <Route
      {...rest}
      render={() =>
        isLoggedIn ? <div>{children}</div> : <Redirect to="/login" />
      }
    />
  );
};

const AdminRoutes = ({ children, ...rest }) => {
  const { isLoggedIn, isAdmin } = useAuthContext();

  return <AuthenticatedRoutes {...rest} render={() => isAdmin && children} />;
};

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
      <Route path="/kontorer/:id">
        <Kontor />
      </Route>
      <AuthenticatedRoutes exact path="/nyttkontor/">
        <NyttKontor />
      </AuthenticatedRoutes>
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
      <AuthenticatedRoutes exact path="/nyartikkel/">
        <NyArtikkel />
      </AuthenticatedRoutes>
      <AdminRoutes path="/dashboard">
        <Dashboard />
      </AdminRoutes>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
