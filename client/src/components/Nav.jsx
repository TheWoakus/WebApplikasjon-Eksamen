import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
	display: inline-grid;
	justify-self: end;
`;

const NavMenu = styled.ul`
	margin: 0;
	padding: 0;
	
`;

const NavMenuItem = styled.li`
	display: grid;
	grid-template-columns: repeat(5, 175px);
	margin: 0;
	padding: 0;
	list-style: none;
	align-items: center;
	font-variant: small-caps;
	&:first-child {
		padding-left: 0;
	}

	& > a {
		color: #333;
		font-size: 20px;
		font-weight: 700;
		line-height: 60px;
		width: 100%;
		padding: 5px 0;
		text-decoration: none;
		text-align: center;
		&.active {
			color: #499eb8;
		}
		&.logginn {
			color: #fff;
			background-color: #499eb8;
			text-transform: uppercase;
		}
		&:hover {
			color: #499eb8;
		}
		&.logginn:hover {
			color: #333;
		}
	}

	@media(max-width: 1000px) {
		grid-template-columns: 1fr;
	}
`;

const Nav = () => (
	<StyledNav>
		<NavMenu>
			<NavMenuItem>
				<NavLink exact to="/" activeClassName="active">
					Hjem
				</NavLink>
				<NavLink exact to="/kontorer/" activeClassName="active">
					Kontorer
				</NavLink>
				<NavLink exact to="/fagartikler/" activeClassName="active">
					Fagartikler
				</NavLink>
				<NavLink exact to="/kontakt/" activeClassName="active">
					Kontakt
				</NavLink>
				<NavLink exact to="/logginn/" activeClassName="active" className="logginn">
					Logg inn
				</NavLink>
			</NavMenuItem>
		</NavMenu>
	</StyledNav>
);

export default Nav;
