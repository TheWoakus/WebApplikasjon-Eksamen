import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.header`
  display: grid;
  background-color: #dbdbdb;
  height: 300px;
  margin-bottom: 100px;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  place-self: center;
  margin: 5px;
`;

class PageHeader extends React.Component {
  render() {
    return (
      <Header>
        <Title>{this.props.title}</Title>
      </Header>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
