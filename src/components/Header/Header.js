import React, { useContext } from 'react';
import { AppContext } from 'context';
import { Link } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  const { openSidebar } = useContext(AppContext);

  return (
    <HeaderWrapper>
      <Logo to='/'>API Hub</Logo>
      <IconWrapper>
        <Icon as='a' href='https://github.com/JalalMallah' target='_blank'>
          <FontAwesomeIcon icon={faGithubAlt} />
        </Icon>
        <Icon as='a' href='https://www.linkedin.com/in/jalal-mallah' target='_blank'>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Icon>
        <Icon as='a' href='https://twitter.com/jalal_mallah_' target='_blank'>
          <FontAwesomeIcon icon={faTwitter} />
        </Icon>
        <OpenSidebarIcon onClick={openSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </OpenSidebarIcon>
      </IconWrapper>
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

  @media (min-height: 700px) {
    position: sticky;
    z-index: 2;
    top: 0;
  }
`;

const IconWrapper = styled.div`
  margin: 0;
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
  margin: 0 0 0 2rem;
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

const Icon = styled(OpenSidebarIcon)`
  margin: 0 0 0 1.2rem;
  font-size: 1.4rem;
`;
