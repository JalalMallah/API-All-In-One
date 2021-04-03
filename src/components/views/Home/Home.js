import React from 'react';
import styled from 'styled-components';

import { Paragraph, Title, Wrapper } from 'styles/MyStyledComponents';

export default function Home() {
  return (
    <Wrapper>
      <Title>About this project</Title>
      <Paragraph>
        This website aims to group few small API-related projects into one. My goal was to create
        one large project which includes many API services instead of creating a small project for
        each API service I found interesting. Using the sidebar you can choose between multiple
        API-based services. 🔥
      </Paragraph>
      <Paragraph>Available options include:</Paragraph>
      <List>
        <li>Quotes for daily inspiration 🧠</li>
        <li>Current weather 🌥️</li>
        <li>Exchange rates 💵</li>
        <li>Song lyrics 🎵</li>
        <li>Meal Finder 🍖</li>
      </List>
      <Subtitle>Enjoy! 😃</Subtitle>
    </Wrapper>
  );
}

const List = styled.ul`
  margin: 0 0 2rem;
  padding: 0 0 0 3rem;
  list-style-type: disc;

  & li {
    margin: 0 0 0.5rem;
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.h4`
  font-size: 1.5rem;
`;
