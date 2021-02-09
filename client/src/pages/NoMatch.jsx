import React from 'react';

import PageHeader from '../components/PageHeader.jsx';
import Callout from '../components/Callout.jsx';
import PageFooter from '../components/PageFooter.jsx';

const NoMatch = () => (
	<>
		<PageHeader />
		<section id="page_wrapper">
			<section id="page_content">
				<Callout title="404" />
				<Callout title="Oi da! Her har noe skjedd.. Prøv å gå tilbake" />
			</section>
		</section>
		<PageFooter />
	</>
);
export default NoMatch;
