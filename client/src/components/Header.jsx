import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Nav from './Nav';

const StyledHeader = styled.header`
	display: grid;
	grid-template-columns: 100px auto;
	grid-gap: 20px;

	height: 70px;
	box-shadow: 0px 6px 10px rgba(0,0,0,.4);
`;
const StyledH1 = styled.h1`
	margin-left: 40px;
	font-size: 20px;
	line-height: 60px;
`;
const Header = () => (
	<StyledHeader className="main_header">
		<Logo />
		<Nav />
	</StyledHeader>
);

export default Header;
