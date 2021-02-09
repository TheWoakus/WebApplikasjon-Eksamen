import React from 'react';

import PageHeader from '../components/PageHeader.jsx';
import Callout from '../components/Callout.jsx';
import PageFooter from '../components/PageFooter.jsx';

const Hjem = () => (
	<>
		<PageHeader />
		<section id="page_wrapper">
			<section id="page_content">
				<Callout title="Velkommen til Lions" />
			</section>
		</section>
		<PageFooter />
	</>
);

export default Hjem;
