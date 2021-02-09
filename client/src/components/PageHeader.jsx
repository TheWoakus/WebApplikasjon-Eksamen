import React from 'react';
import styled from 'styled-components';

import Logo from './Logo.jsx';
import Nav from './Nav.jsx';

const Header = styled.header`
  display: grid;
  grid-template-columns: 100px auto;
  grid-gap: 20px;

  height: 100px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
`;

const PageHeader = () => (
	<Header className="main_header">
		<Logo />
		<Nav />
	</Header>
);

export default PageHeader;
