import React, { useState } from 'react';

import Loader from 'components/Loader/Loader';
import { Title, Wrapper } from 'styles/MyStyledComponents';
import Form from './Form/Form';
import MealsPanel from './MealsPanel/MealsPanel';
import SingleMealPanel from './SingleMealPanel/SingleMealPanel';

export default function MealFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundMeals, setFoundMeals] = useState('');
  const [shouldShowLoader, setShouldShowLoader] = useState(false);
  const [mealDetails, setMealDetails] = useState('');
  const [shouldShowError, setShouldShowError] = useState(false);

  function handleInputChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    if (!searchTerm) return;

    setShouldShowLoader(true);
    searchMeal(searchTerm);
    setSearchTerm('');
    setMealDetails('');
    setShouldShowError(false);
  }

  async function searchMeal(term) {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term.trim()}`;
    const res = await fetch(URL);
    const data = await res.json();
    setFoundMeals(data.meals);
    setShouldShowLoader(false);
    if (!data.meals) {
      setShouldShowError(true);
      return;
    }
  }

  function handleRandomClick(e) {
    e.preventDefault();
    getRandomMeal();
    setShouldShowLoader(true);
  }

  async function getRandomMeal() {
    setShouldShowError(false);
    const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const res = await fetch(URL);
    const data = await res.json();
    setMealDetails(data.meals[0]);
    setShouldShowLoader(false);
  }

  async function getMealDetails(mealID) {
    setShouldShowLoader(true);
    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data.meals[0]);
    setMealDetails(data.meals[0]);
    setShouldShowLoader(false);
  }

  return (
    <Wrapper>
      <Title>Find recipes for your favorite meals! 😋</Title>
      <Form
        term={searchTerm}
        handleChange={handleInputChange}
        handleRandomClick={handleRandomClick}
        handleSubmit={handleSearchFormSubmit}
      />
      {shouldShowLoader && <Loader />}
      {shouldShowError && <p>No results. Try a different keyword.</p>}
      {foundMeals && !mealDetails && (
        <MealsPanel foundMeals={foundMeals} getMealDetails={getMealDetails} term={searchTerm} />
      )}
      {mealDetails && <SingleMealPanel mealDetails={mealDetails} />}
    </Wrapper>
  );
}
