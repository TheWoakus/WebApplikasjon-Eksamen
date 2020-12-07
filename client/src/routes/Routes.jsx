import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';

import Fagartikler from '../pages/Fagartikler';
import Hjem from '../pages/Hjem';
import Kontakt from '../pages/Kontakt';
import Kontorer from '../pages/Kontorer';
import Logginn from '../pages/Logginn';
import Registrer from '../pages/Registrer';
import NyArtikel from '../pages/NyArtikel';
import Artikkel from '../pages/Artikkel';

import MainHeader from '../components/MainHeader'

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
			<Route exact path="/fagartikler/">
				<Fagartikler />
			</Route>
			<Route path="/article/:id">
				<Artikkel />
			</Route>
			<Route exact path="/kontakt/">
				<Kontakt />
			</Route>
			<Route exact path="/logginn/">
				<Logginn />
			</Route>
			<Route exact path="/registrer/">
				<Registrer />
			</Route>
			<Route exact path="/nyartikel/">
				<NyArtikel />
			</Route>
			<Route path="*">
				<NoMatch />
			</Route>
		</Switch>
	</Router>
);

export default Routes;
