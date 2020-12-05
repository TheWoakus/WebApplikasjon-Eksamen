import React from 'react';

import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import PageFooter from '../components/PageFooter';

class Kontakt extends React.Component {
	render() {
		return (
			<>
				<PageHeader title="Kontakt oss" />
				<ContactForm />
				<PageFooter />
			</>
		)
	}
}

export default Kontakt;