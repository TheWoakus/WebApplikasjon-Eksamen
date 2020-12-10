import React from 'react';
import { NavLink } from 'react-router-dom';

import PageHeader from '../components/PageHeader.jsx';
import PageFooter from '../components/PageFooter.jsx';

const Hjem = () => (
  <>
    <PageHeader title="Velkommen til LG Rørleggerservice AS" />
    <section id="page_wrapper">
      <section id="page_content">
        <NavLink exact to="/kontorer/" id="kontorer">
          <section className="title">
            <h2>Kontorer</h2>
          </section>
        </NavLink>
        <NavLink exact to="/kontakt/" id="kontakt">
          <section className="title">
            <h2>Kontakt</h2>
          </section>
        </NavLink>
        <NavLink exact to="/fagartikler?q=bad" id="fagartikler">
          <section className="title">
            <h2>Se våre fagartikler om oppussing av bad</h2>
          </section>
        </NavLink>
      </section>
    </section>
    <PageFooter />
  </>
);

export default Hjem;
