import React from 'react';

import PageHeader from '../components/PageHeader.jsx';
import Callout from '../components/Callout.jsx';
import ContactForm from '../components/ContactForm.jsx';
import PageFooter from '../components/PageFooter.jsx';

const Kontakt = () => (
  <>
		<PageHeader />
		<section id="page_wrapper">
			<section id="page_content">
				<Callout title="Kontakt oss" />
      	<ContactForm />
    	</section>
		</section>
    <PageFooter />
  </>
);

export default Kontakt;
