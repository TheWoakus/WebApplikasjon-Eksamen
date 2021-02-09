import React from 'react';

import PageHeader from '../components/PageHeader.jsx';
import Callout from '../components/Callout.jsx';
import ArtworkForm from '../components/ArtworkForm.jsx';
import PageFooter from '../components/PageFooter.jsx';

const Verk = () => (
	<>
		<PageHeader />
				<Callout title="Legg til nytt verk" />
				<ArtworkForm />
		<PageFooter />
	</>
);

export default Verk;
