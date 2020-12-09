import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  border: 1px solid black;
  padding: 20px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 5px;
  grid-area: title;
`;

const Address = styled.p`
  margin: 0;
  grid-area: address;
`;

const Phone = styled.p`
  margin: 0;
  grid-area: phone;
`;

const Mail = styled.a`
  margin: 0;
  grid-area: mail;
`;

class Office extends React.Component {
  render() {
    return (
      <>
        <Section>
          <Title>{this.props.data.title} </Title>
          <Address>{this.props.data.address} </Address>
          <Phone>{this.props.data.phone}</Phone>
          <Mail href={`mailto:${this.props.data.location}@epost.no`}>
            {this.props.data.location}@epost.no
          </Mail>
        </Section>
      </>
    );
  }
}

Office.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Office;
