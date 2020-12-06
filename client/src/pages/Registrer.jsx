import React from 'react';
import { NavLink } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import SignupForm from '../components/SignupForm';
import PageFooter from '../components/PageFooter';

class Logginn extends React.Component {
	render() {
		return (
			<>
				<PageHeader title="Logg inn" />

				<section id="page_wrapper">
					<h2 className="callout">Come join the dark side, we have cookies!</h2>
					<SignupForm />
				</section>
				<PageFooter />
			</>
		)
	}
}

export default Logginn;