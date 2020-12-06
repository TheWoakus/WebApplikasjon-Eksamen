import React from 'react';
import { NavLink } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import LoginForm from '../components/LoginForm';
import PageFooter from '../components/PageFooter';

class Logginn extends React.Component {
	render() {
		return (
			<>
				<PageHeader title="Logg inn" />
				<section id="page_wrapper">
					<LoginForm />
					<div>
						<NavLink exact to="/registrer/" className="title">
						<button
							type="submit"
							className="button link"
						>Register</button>
						</NavLink>
					</div>
				</section>
				<PageFooter />
			</>
		)
	}
}

export default Logginn;