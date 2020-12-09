import React from 'react';
import PropTypes from 'prop-types';
import Office from './Office.jsx';

class OfficeLocation extends React.Component {
  render() {
    return (
      <>
        <section className="location">
          <h2>{this.props.data.location}</h2>
        </section>
      </>
    );
  }
}

OfficeLocation.PropTypes = {
  data: PropTypes.object.isRequired,
};

export default OfficeLocation;
