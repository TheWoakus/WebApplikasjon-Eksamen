import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavGroup = styled.nav`
  display: inline-grid;
  justify-self: end;
`;

const NavMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0;
`;

const NavMenuItem = styled.li`
  margin: 0;
  text-align: center;
  list-style: none;
  font-variant: small-caps;

  & > a {
    display: block;
    font-size: 20px;
    font-weight: 700;
    line-height: 100px;
    width: 120px;
    text-align: center;
    margin: 0;

    &:hover {
      color: #fff;
      background-color: #2b5197;
    }
  }
`;

const Nav = () => (
  <NavGroup>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/" activeClassName="home">
          Hjem
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/produkter" activeClassName="products">
          Produkter
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/kunstnere" activeClassName="artists">
          Kunstnere
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/om" activeClassName="about">
          Om oss
        </NavLink>
      </NavMenuItem>
			<NavMenuItem>
				<NavLink exact to="/kontakt" activeClassName="contact">
					Kontakt
        </NavLink>
			</NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/logginn" activeClassName="login">
          Logg inn
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </NavGroup>
);

export default Nav;
