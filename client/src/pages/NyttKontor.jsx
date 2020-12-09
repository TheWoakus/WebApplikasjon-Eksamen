import React from 'react';
import { NavLink } from 'react-router-dom';

import PageHeader from '../components/PageHeader.jsx';
import OfficeForm from '../components/OfficeForm.jsx';
import PageFooter from '../components/PageFooter.jsx';

const NyttKontor = () => (
  <>
    <PageHeader title="Opprett et nytt kontor" />
    <section id="page_wrapper">
      <h2 className="callout">Hvor vil du ekspandere?</h2>
      <OfficeForm />
    </section>
    <PageFooter />
  </>
);

export default NyttKontor;
