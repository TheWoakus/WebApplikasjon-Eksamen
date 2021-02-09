import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from '../assets/svg/logo.svg';

const Img = styled.img`
  height: 80px;
  width: 80px;

  margin-left: 20px;
  margin-top: 10px;
`;

const Logo = () => (
	<NavLink exact to="/">
		<Img src={logo} alt="Til forsiden" />
	</NavLink>
);

export default Logo;
