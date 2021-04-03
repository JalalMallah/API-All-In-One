import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 3px;
  outline: none;
  background-color: var(--dark-blue);
  color: var(--light-gray);
  font-family: var(--main-font);
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    background-color: var(--light-blue);
  }

  @media (min-width: 360px) {
    font-size: 1.6rem;
  }
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Paragraph = styled.p`
  margin: 0 0 1rem;
  font-size: 1.5rem;
  line-height: 1.4;

  @media (min-width: 360px) {
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: 1.8rem;

  @media (min-width: 360px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    margin: 0 0 1.5rem;
    font-size: 2.4rem;
    text-align: center;
  }
`;

export const Wrapper = styled.main`
  width: 100%;
  max-width: 500px;
  padding: 1rem 1.5rem 3rem;
  margin: 0 auto;

  @media (min-width: 360px) {
    padding: 1.5rem 2rem 3rem;
  }

  @media (min-width: 768px) {
    padding: 3rem 2rem 3rem;
  }
`;
