import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
	display: grid;
	grid-template-columns: 150px 150px 150px;
	grid-gap: 20px;
	text-align: center;
	justify-content: center;

	position: absolute;
	bottom: 0;
	width: 100%;
	height: 60px;
`;

const PageFooter = () => (
	<Footer>
		<p>Orgnr: 007 007 007</p>
		{/* <p><a href="mailto:lg@lgror.no">lg@lgror.no</a></p> */}
		<a href="mailto:lg@lgror.no" class="mail">lg@lgror.no</a>
		<a href="callto:99000000" class="phone">99 00 00 00</a>
	</Footer>
);

export default PageFooter;
