import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function MealsPanel({ foundMeals, getMealDetails, term }) {
  const meals = foundMeals.map(meal => (
    <MealContainer key={meal.idMeal} onClick={() => getMealDetails(meal.idMeal)}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>{meal.strMeal}</h2>
    </MealContainer>
  ));

  return (
    <>
      <Wrapper>{meals}</Wrapper>
    </>
  );
}

MealsPanel.propTypes = {
  foundMeals: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleMealClick: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

const MealContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 14rem;
  border: 3px solid var(--light-gray);
  border-radius: 3px;

  & img {
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  & h2 {
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--light-gray);
    font-size: 1.6rem;
    text-align: center;
    transition: opacity 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover h2 {
    opacity: 1;
  }
`;
