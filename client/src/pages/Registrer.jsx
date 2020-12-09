import React from 'react';

import PageHeader from '../components/PageHeader.jsx';
import SignupForm from '../components/SignupForm.jsx';
import PageFooter from '../components/PageFooter.jsx';

const Registrer = () => (
  <>
    <PageHeader title="Registrer deg" />

    <section id="page_wrapper">
      <h2 className="callout">Come join the dark side, we have cookies!</h2>
      <SignupForm />
    </section>
    <PageFooter />
  </>
);

export default Registrer;
