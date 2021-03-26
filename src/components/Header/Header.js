import React, { useContext } from 'react';
import { AppContext } from 'context';
import { Link } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const { openSidebar } = useContext(AppContext);

  return (
    <HeaderWrapper>
      <Logo to='/'>API Hub</Logo>
      <OpenSidebarIcon onClick={openSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </OpenSidebarIcon>
      <Navigation />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: var(--dark-blue);
  color: var(--light-gray);
`;

const Logo = styled(Link)`
  color: var(--light-gray);
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--custom-yellow);
  }
`;

const OpenSidebarIcon = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: var(--light-gray);
  font-size: 2.2rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--custom-yellow);
  }
`;
