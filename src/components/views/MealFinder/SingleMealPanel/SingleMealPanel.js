import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Paragraph } from 'styles/MyStyledComponents';

export default function SingleMealPanel({ mealDetails }) {
  function getIngredients() {
    let ingredients = [];

    for (let i = 1; i <= 20; i++) {
      if (!mealDetails[`strIngredient${i}`]) break;
      ingredients.push(`${mealDetails[`strIngredient${i}`]} - ${mealDetails[`strMeasure${i}`]}`);
    }

    const ingredientItems = ingredients.map(item => (
      <li key={item}>{item.slice(0, 1).toUpperCase() + item.slice(1)}</li>
    ));

    return ingredientItems;
  }

  function getYouTubeVideo() {
    const youTubeLink = mealDetails.strYoutube.replace('watch?v=', 'embed/');
    return (
      <iframe
        src={youTubeLink}
        title={mealDetails.strMeal}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <SingleMealContainer>
      <h2>{mealDetails.strMeal}</h2>
      <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
      <Text>Category: {mealDetails.strCategory}</Text>
      <Text>Origin: {mealDetails.strArea}</Text>
      <h3>Ingredients:</h3>
      <ul>{getIngredients()}</ul>
      <h3>Instructions:</h3>
      <Instructions>{mealDetails.strInstructions}</Instructions>
      <FrameContainer>{getYouTubeVideo()}</FrameContainer>
    </SingleMealContainer>
  );
}

SingleMealPanel.propTypes = {
  mealDetails: PropTypes.object.isRequired,
};

const SingleMealContainer = styled.section`
  & h2 {
    margin: 0 0 1rem;
    font-size: 2rem;
    text-align: center;
  }

  & img {
    display: block;
    width: 20rem;
    margin: 0 auto 1rem;
    border-radius: 3px;
  }

  & h3 {
    margin: 2rem 0 1rem;
    padding: 0 0 0 0.6rem;
    border-left: 6px solid var(--dark-blue);
    font-size: 1.8rem;
  }

  & ul {
    padding: 0 0 0 2rem;
    list-style-type: disc;
  }

  & li {
    margin: 0 0 0.5rem;
    font-size: 1.6rem;
  }
`;

const Text = styled(Paragraph)`
  text-align: center;
`;

const Instructions = styled(Paragraph)`
  white-space: pre-wrap;
`;

const FrameContainer = styled.div`
  margin: 2rem auto;

  & iframe {
    width: 100%;
    min-height: 180px;

    @media (min-width: 768px) {
      height: 281px;
    }
  }
`;
