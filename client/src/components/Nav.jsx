import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../context/AuthProvider';
import { logout } from '../utils/authService';

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
		grid-template-columns: repeat(5, 50px);
	}
`;

const Nav = () => {
	
	const {isLoggedIn,IsAdmin,setUser} = useAuthContext();

	const handleLogout = async () => {
		await logout();
		setUser(null);
	}

	return (
	<StyledNav>
		<NavMenu>
			<NavMenuItem>
				<NavLink exact to="/" activeClassName="active" className="secondary hjem_svg">

				</NavLink>
				<NavLink exact to="/kontorer" activeClassName="active" className="secondary kontorer_svg">

				</NavLink>
				<NavLink exact to="/fagartikler" activeClassName="active" className="secondary fagartikler_svg">

				</NavLink>
				<NavLink exact to="/kontakt" activeClassName="active" className="secondary kontakt_svg">

				</NavLink>
				<NavLink exact to="/logginn" activeClassName="active" className="secondary login_svg">

				</NavLink>
				<NavLink exact to="/" activeClassName="active" className="primary"> 
					Hjem
				</NavLink>
				<NavLink exact to="/kontorer/" activeClassName="active" className="primary"> 
					Kontorer
				</NavLink>
				<NavLink exact to="/fagartikler/" activeClassName="active" className="primary"> 
					Fagartikler
				</NavLink>
				<NavLink exact to="/kontakt/" activeClassName="active" className="primary"> 
					Kontakt
				</NavLink>
				{!isLoggedIn && (
					<NavLink exact to="/login/" activeClassName="active" className="primary logginn">
						Logg inn
					</NavLink>
				)}

				{isLoggedIn && (
					<NavLink exact to="/" activeClassName="active" className="primary logginn" onClick={handleLogout}>
						Logg ut
					</NavLink>
				)}
				
			</NavMenuItem>
		</NavMenu>
	</StyledNav>
	)
};

export default Nav;
