import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav``;

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
      color: #333;
    }
    &:hover {
      color: #499eb8;
    }
  }
`;

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/">
          {process.env.COMPANY_LOGO}
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
