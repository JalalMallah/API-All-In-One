import React, { useContext } from 'react';
import { AppContext } from 'context';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  const { closeSidebar, sidebarRef } = useContext(AppContext);

  return (
    <Sidebar ref={sidebarRef}>
      <CloseSidebarIcon onClick={closeSidebar}>
        <FontAwesomeIcon icon={faTimes} />
      </CloseSidebarIcon>
      <List>
        <ListItem>
          <StyledNavLink to='/' exact activeClassName='active-link' onClick={closeSidebar}>
            Home
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to='/quotes' activeClassName='active-link' onClick={closeSidebar}>
            Quotes
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to='/weather' activeClassName='active-link' onClick={closeSidebar}>
            Weather
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to='/exchange-rates' activeClassName='active-link' onClick={closeSidebar}>
            Exchange Rates
          </StyledNavLink>
        </ListItem>
      </List>
    </Sidebar>
  );
}

const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100vh;
  background-color: var(--light-blue);
  transform: translateX(100%);
  transition: transform 0.3s ease;

  @media (min-width: 360px) {
    width: 250px;
  }
`;

const CloseSidebarIcon = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  outline: none;
  background: transparent;
  color: var(--light-gray);
  font-size: 2rem;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 360px) {
    font-size: 2.4rem;
  }
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin: 0 0 3rem;
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  color: var(--light-gray);
  font-size: 1.5rem;
  text-decoration: none;

  &.active-link {
    font-weight: bold;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 2px 0 0;
    border-bottom: 1px solid var(--light-gray);
    transform: scale(0, 1);
    transition: transform 0.3s ease;
  }

  &:hover::after,
  &:focus::after {
    transform: scale(1, 1);
  }

  @media (min-width: 360px) {
    font-size: 1.8rem;
  }
`;
