import React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PageHeader from '../components/PageHeader.jsx';
import PageFooter from '../components/PageFooter.jsx';
import Search from '../components/Search.jsx';
import FetchOffices from '../components/FetchOffices.jsx';

import { DBOffices } from '../assets/js/db_offices.json';

const Section = styled.section`
  border: 1px solid black;
  padding: 20px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 5px;
  grid-area: list_title;
`;

const Address = styled.p`
  margin: 0;
  grid-area: list_address;
`;

const Phone = styled.p`
  margin: 0;
  grid-area: list_phone;
`;

const Mail = styled.a`
  margin: 0;
  grid-area: list_mail;
`;

class Kontorer extends React.Component {
  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.populateDB = this.populateDB.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      search: null,
      viewType: true,
      db_offices: {},
    };
  }

  componentDidMount() {
    this.loadSamples();
    // this.populateDB();
  }

  loadSamples() {
    this.setState({
      db_offices,
    });
  }

  populateDB() {
    const collection = this.state.db_offices;
    console.log(collection);
    axios
      .post(
        `${process.env.BASE_URL}${process.env.API_VERSION}/kontorer`,
        collection
      )
      .then((res) => {
        console.log(res.data);
        this.articleForm.reset();
        this.props.history.push('/kontorer');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  search(keyword) {
    this.setState({ search: keyword });
  }

  toggleViewType() {
    this.setState({ viewType: !this.state.viewType });
  }

  render() {
    const viewtype = this.state.viewType ? 'gridOffices' : 'listOffices';
    const currentlocation = 'start';
    const counter = 1;

    // const allOfficeLocations = Object.values(this.state.allLocations)
    //   .filter((data) => {
    //     if (this.state.search == null) {
    //       return data;
    //     }
    //     if (
    //       data.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
    //       data.address
    //         .toLowerCase()
    //         .includes(this.state.search.toLowerCase()) ||
    //       data.phone.toLowerCase().includes(this.state.search.toLowerCase()) ||
    //       data.location.toLowerCase().includes(this.state.search.toLowerCase())
    //     ) {
    //       return data;
    //     }
    //   })
    //   .map((data) => (
    //     <Section className="oneOffice" key={`${data.location}${data.id}`}>
    //       <Title className="list_title">{data.title}</Title>
    //       <Address className="list_address">
    //         {data.address} {data.id}
    //       </Address>
    //       <Phone className="list_phone">
    //         {data.phone}
    //         {data.id}
    //       </Phone>
    //       <Mail
    //         className="list_mail"
    //         href={`mailto:${data.location}${data.id}@epost.no`}
    //       >
    //         {data.location}
    //         {data.id}@epost.no
    //       </Mail>
    //     </Section>
    //   ));

    return (
      <>
        <PageHeader title="Våre kontorer" />
        <section id="page_wrapper">
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
                {/* {allOfficeLocations} */}
                <FetchOffices viewtype={viewtype} />
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
