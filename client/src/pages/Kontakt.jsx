import React from 'react';

import PageHeader from '../components/PageHeader.jsx';
import ContactForm from '../components/ContactForm.jsx';
import PageFooter from '../components/PageFooter.jsx';

class Kontakt extends React.Component {
  render() {
    return (
      <>
        <PageHeader title="Kontakt oss" />
        <section id="page_wrapper">
          <h2 className="callout">
            Si hei, send en hilsen eller gi oss ris/ros!
          </h2>
          <ContactForm />
        </section>
        <PageFooter />
      </>
    );
  }
}

export default Kontakt;
