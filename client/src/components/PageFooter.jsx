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

	@media(max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

const PageFooter = () => (
	<Footer className="footer">
		<p>Orgnr: 007 007 007</p>
		<a href="mailto:lg@lgror.no" className="mail">lg@lgror.no</a>
		<a href="callto:99000000" className="phone">99 00 00 00</a>
	</Footer>
);

export default PageFooter;
