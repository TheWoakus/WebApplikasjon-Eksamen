import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import NewEmployeeButton from './NewEmployeeButton.jsx';
import NewEmployeeModal from './NewEmployeeModal.jsx';

class OfficeForm extends React.Component {
  constructor() {
    super();

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeIngress = this.onChangeIngress.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);

    this.state = {};
  }

  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  onChangeIngress(event) {
    this.setState({ ingress: event.target.value });
  }

  onChangeAddress(event) {
    this.setState({ address: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const officeDetails = {
      title: this.title.value,
      ingress: this.ingress.value,
      address: this.address.value,
    };

    axios
      .post(
        `${process.env.BASE_URL}${process.env.API_VERSION}/nyttkontor`,
        officeDetails
      )
      .then((res) => {
        console.log(res.data);
        this.officeForm.reset();
        this.props.history.push('/kontorer');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <NewEmployeeModal addEmployee={this.addEmployee} />
        <form
          ref={(input) => (this.articleForm = input)}
          onSubmit={(event) => this.onSubmit(event)}
        >
          <fieldset>
            <label className="formLabel" htmlFor="title">
              Bedrift&#58;
              <span id="title_error">OBS!! Sjekk at denne er riktig</span>
            </label>
            <input
              ref={(input) => (this.title = input)}
              type="text"
              name="title"
              className="input"
              placeholder="Skriv inn navnet på bedriften"
              onChange={this.onChangeTitle}
            />

            <label className="formLabel" htmlFor="address">
              Adresse&#58;
              <span id="address_error">OBS!! Sjekk at denne er riktig</span>
            </label>
            <input
              ref={(input) => (this.address = input)}
              type="text"
              name="address"
              className="input"
              placeholder="Kun gatenavn"
              onChange={this.onChangeAddress}
            />

            <label className="formLabel" htmlFor="phone">
              Telefon&#58;
              <span id="phone_error">OBS!! Sjekk at denne er riktig</span>
            </label>
            <input
              ref={(input) => (this.phone = input)}
              type="number"
              name="phone"
              defaultValue="699900"
              className="input"
              placeholder="Hvor kan vi treffe dere?"
              onChange={this.onChangeAddress}
            />

            <label className="formLabel" htmlFor="ingress">
              Ingress&#58;
              <span id="ingress_error">OBS!! Sjekk at denne er riktig</span>
            </label>
            <textarea
              ref={(input) => (this.ingress = input)}
              name="ingress"
              cols="30"
              rows="5"
              className="input"
              placeholder="En liten ingress"
              onChange={this.onChangeIngress}
            ></textarea>

            <label className="formLabel" htmlFor="category">
              Ansatte&#58;
              <span id="category_error">OBS!! Sjekk at denne er riktig</span>
            </label>
            <section id="ansattliste">{/* <p>Navn Navnsesen</p> */}</section>
            <NewEmployeeButton />

            <button type="submit" className="button centered big">
              Opprett
            </button>
          </fieldset>
        </form>
      </>
    );
  }
}

OfficeForm.propTypes = {
  history: PropTypes.object.isRequired,
};
export default withRouter(OfficeForm);
