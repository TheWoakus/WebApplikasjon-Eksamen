import React from 'react';

import PageHeader from '../components/PageHeader.jsx';
import Callout from '../components/Callout.jsx';
import SignupForm from '../components/SignupForm.jsx';
import PageFooter from '../components/PageFooter.jsx';

const Registrer = () => (
	<>
		<PageHeader />
		<section id="page_wrapper">
			<section id="page_content">
				<Callout title="Registrer deg som ny bruker her" />
				<SignupForm />
			</section>
		</section>
		<PageFooter />
	</>
);

export default Registrer;
