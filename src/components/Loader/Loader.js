import React from 'react';

import styled, { keyframes } from 'styled-components';

export default function Loader() {
  return (
    <LoadingAnimation>
      <span></span>
      <span></span>
      <span></span>
    </LoadingAnimation>
  );
}

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
`;

const LoadingAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;

  & > span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: 0 0.3rem;
    background-color: var(--dark-blue);
    animation: ${bounce} 0.5s linear infinite;

    &:nth-of-type(2) {
      animation-delay: 0.1s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.2s;
    }
  }
`;
