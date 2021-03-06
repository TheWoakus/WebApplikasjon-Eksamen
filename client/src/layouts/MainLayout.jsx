import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@chakra-ui/core';
import styled from 'styled-components';
import Nav from '../components/Nav.jsx';

const StyledHeader = styled.header`
  background: #fff;
  box-shadow: 1px 1px 2px #f5f5f5;
  margin-bottom: 60px;
  width: 100%;
`;

const MainLayout = ({ children }) => (
  <Box>
    <StyledHeader>
      <Nav />
    </StyledHeader>
    <Box w="100%" padding="0 20px" margin="0 auto">
      {children}
    </Box>
  </Box>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
};

export default MainLayout;
