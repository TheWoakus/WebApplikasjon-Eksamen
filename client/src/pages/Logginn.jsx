import React from 'react';
import { NavLink } from 'react-router-dom';

import PageHeader from '../components/PageHeader.jsx';
import Callout from '../components/Callout.jsx';
import LoginForm from '../components/LoginForm.jsx';
import PageFooter from '../components/PageFooter.jsx';

const Logginn = () => (
  <>
		<PageHeader />
		<section id="page_wrapper">
			<section id="page_content">
				<Callout title="Logg inn" />
				<LoginForm />
				<section id="register">
					<p>Om du ikke har en konto..</p>
					<NavLink exact to="/registrer" activeClassName="active register">
						<button type="button" className="button big centered">
							Register deg
					</button>
					</NavLink>
				</section>
			</section>
		</section>
		<PageFooter />
	</>
);

export default Logginn;
