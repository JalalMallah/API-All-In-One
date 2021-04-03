import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Paragraph, Title, Wrapper } from 'styles/MyStyledComponents';

import Image404 from 'assets/404.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function PageNotFound() {
  return (
    <Wrapper>
      <Title>Oops...!</Title>
      <Paragraph>We can't seem to find the page you're looking for...</Paragraph>
      <Button to='/'>
        Go back home <FontAwesomeIcon icon={faHome} />
      </Button>
      <Image src={Image404} alt='Page not found' />
    </Wrapper>
  );
}

const Button = styled(Link)`
  display: inline-block;
  margin: 0 auto 1.5rem;
  padding: 0.5rem 2rem;
  outline: none;
  border: none;
  border-radius: 3px;
  background: var(--dark-blue);
  color: var(--light-gray);
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  @media (min-width: 360px) {
    margin: 2rem auto 3rem;
    padding: 1rem 2rem;
    font-size: 1.6rem;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 450px;
  border-radius: 3px;

  @media (min-width: 768px) {
    margin: 3rem auto 0;
  }
`;
