import React from 'react';

import styled from 'styled-components';

export default function Home() {
  return (
    <HomeWrapper>
      <Title>About this project</Title>
      <Text>
        This website aims to group few small API-related projects into one. My goal was to create
        one large project which includes many API services instead of creating a small project for
        each API service I found interesting. Using the sidebar you can choose between multiple
        API-based services. 🔥
      </Text>
      <Text>Available options include:</Text>
      <List>
        <ListItem>Quotes for daily inspiration 🧠</ListItem>
        <ListItem>Current weather 🌥️</ListItem>
        <ListItem>Exchange rates 💵</ListItem>
        <ListItem>Song lyrics 🎵</ListItem>
      </List>
      <Subtitle>Enjoy! 😃</Subtitle>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  padding: 1rem 1.5rem;
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: 1.8rem;
`;

const Text = styled.p`
  margin: 0 0 1rem;
  font-size: 1.5rem;
  line-height: 1.4;
`;

const List = styled.ul`
  margin: 0 0 2rem;
  padding: 0 0 0 3rem;
  list-style-type: disc;
`;

const ListItem = styled.li`
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
`;

const Subtitle = styled.h4`
  font-size: 1.5rem;
`;
