import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import PageHeader from '../components/PageHeader.jsx';
import PageFooter from '../components/PageFooter.jsx';
import Search from '../components/Search.jsx';
import FetchOffices from '../components/FetchOffices.jsx';

import { dbOffices } from '../assets/js/dbOffices.js';

class Kontorer extends React.Component {
  constructor() {
    super();

    this.populateDB = this.populateDB.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      search: null,
      viewType: true,
      officeList: dbOffices,
    };
  }

  populateDB() {
    axios
      .post(
        `${process.env.BASE_URL}${process.env.API_VERSION}/kontorer`,
        dbOffices
      )
      .then((res) => {
        console.log(res.data);
        this.props.history.push('/kontorer');
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line no-undef
    window.location.reload(true); // i know.. deprecated.. but it still works for this task..
  }

  search(keyword) {
    this.setState({ search: keyword });
  }

  toggleViewType() {
    this.setState({ viewType: !this.state.viewType });
  }

  render() {
    const viewtype = this.state.viewType ? 'gridOffices' : 'listOffices';

    return (
      <>
        <PageHeader title="Våre kontorer" />
        <section id="page_wrapper">
          <button
            type="button"
            onClick={this.populateDB}
            className="button big block giveMeSomeRoom"
          >
            Generer kontorer
          </button>
          <button
            type="button"
            onClick={this.populateDB}
            className="button big block giveMeSomeRoom"
          >
            Generer kontorer
          </button>

          <section>
            <Link to="/nyttkontor/" className="button big block">
              Nytt kontor
            </Link>
          </section>
          <section className="officeContent">
            <section className="viewOptions">
              <Search search={this.search} />
              <button
                type="button"
                className={`${this.state.viewType}_mode`}
                onClick={this.toggleViewType.bind(this)}
              ></button>
            </section>
            <section className="branch">
              <section id="officeLocations" className={viewtype}>
                <FetchOffices
                  viewtype={viewtype}
                  searchFilter={this.state.search}
                />
              </section>
            </section>
          </section>
        </section>
        <PageFooter />
      </>
    );
  }
}
export default Kontorer;
