import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from 'styles/MyStyledComponents';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Form({ handleChange, handleRandomClick, handleSubmit, term }) {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type='text'
        placeholder='Search for meals...'
        value={term}
        onChange={handleChange}
      />
      <SearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
      <RandomIcon onClick={handleRandomClick}>
        <FontAwesomeIcon icon={faRandom} />
      </RandomIcon>
    </StyledForm>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleRandomClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
};

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2rem;
  text-align: center;

  @media (min-width: 768px) {
    margin: 0 auto 3rem;
  }
`;

const StyledInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  border-radius: 5px 0 0 5px;
  outline: none;
  background-color: #fff;
  font-family: var(--main-font);
  font-size: 1.5rem;
  transition: border 0.3s ease;
  caret-color: var(--dark-blue);

  &:focus {
    border: 1px solid #999;
  }

  @media (min-width: 360px) {
    font-size: 1.6rem;
  }
`;

const SearchIcon = styled(Button)`
  padding: 0.5rem 1rem;
  border-radius: 0 5px 5px 0;
`;

const RandomIcon = styled(Button)`
  position: relative;
  padding: 0.5rem 1rem;
  margin: 0 0 0 1rem;
`;
