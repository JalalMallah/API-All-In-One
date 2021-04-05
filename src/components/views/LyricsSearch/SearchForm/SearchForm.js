import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from 'styles/MyStyledComponents';

export default function SearchForm({ handleChange, handleSubmit, term }) {
  useEffect(() => {
    document.querySelector('input').focus();
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <SearchInput
        type='text'
        value={term}
        onChange={handleChange}
        placeholder='Enter artist or song name...'
      />
      <SearchButton>Search</SearchButton>
    </Form>
  );
}

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
};

const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto 1rem;

  @media (min-width: 360px) {
    margin: 0 auto 2rem;
  }

  @media (min-width: 768px) {
    margin: 0 auto 3rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  outline: none;
  background-color: #fff;
  font-family: var(--main-font);
  font-size: 1.5rem;

  @media (min-width: 360px) {
    font-size: 1.6rem;
  }
`;

const SearchButton = styled(Button)`
  position: absolute;
  top: 2px;
  right: 2px;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
`;
