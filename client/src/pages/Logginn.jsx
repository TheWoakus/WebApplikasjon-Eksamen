import React from 'react';
import { NavLink } from 'react-router-dom';

import PageHeader from '../components/PageHeader.jsx';
import LoginForm from '../components/LoginForm.jsx';
import PageFooter from '../components/PageFooter.jsx';

class Logginn extends React.Component {
  render() {
    return (
      <>
        <PageHeader title="Logg inn" />
        <section id="page_wrapper">
          <LoginForm />
          <NavLink exact to="/registrer/" className="title">
            <button type="submit" className="button big centered">
              Register
            </button>
          </NavLink>
        </section>
        <PageFooter />
      </>
    );
  }
}

export default Logginn;
