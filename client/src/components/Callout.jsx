import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  place-self: center;
  margin-top: 40px;
`;

class Callout extends React.Component {
  render() {
    return <Title>{this.props.title}</Title>;
  }
}

Callout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Callout;
