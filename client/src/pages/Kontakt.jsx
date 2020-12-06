import React from 'react';

import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import PageFooter from '../components/PageFooter';

class Kontakt extends React.Component {
	render() {
		return (
			<>
				<PageHeader title="Kontakt oss" />
				<section id="page_wrapper">
					<h2 className="callout">Si hei, send en hilsen eller gi oss ris/ros!</h2>
					<ContactForm />
				</section>
				<PageFooter />
			</>
		)
	}
}

export default Kontakt;