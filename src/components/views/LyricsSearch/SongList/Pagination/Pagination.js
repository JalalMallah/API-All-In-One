import React, { useContext } from 'react';
import { LyricsContext } from '../../LyricsContext';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

export default function Pagination() {
  const { response, setResponse, setShouldShowLoader } = useContext(LyricsContext);

  function handleNextClick() {
    getMoreSongs(response.next);
    setShouldShowLoader(true);
    scrollToTop();
  }

  function handlePrevClick() {
    getMoreSongs(response.prev);
    setShouldShowLoader(true);
    scrollToTop();
  }

  async function getMoreSongs(url) {
    const cors_api_host = 'cors-anywhere.herokuapp.com';
    const res = await fetch(`https://${cors_api_host}/${url}`);
    const data = await res.json();
    setResponse(data);
    setShouldShowLoader(false);
  }

  function scrollToTop() {
    document.documentElement.scrollIntoView(true, { behavior: 'smooth' });
  }

  return (
    <Wrapper>
      {response.prev ? (
        <PaginationButton onClick={handlePrevClick}>
          {<FontAwesomeIcon icon={faLongArrowAltLeft} />} Prev
        </PaginationButton>
      ) : (
        ''
      )}
      {response.next ? (
        <PaginationButton onClick={handleNextClick}>
          Next {<FontAwesomeIcon icon={faLongArrowAltRight} />}
        </PaginationButton>
      ) : (
        ''
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 1rem auto;
  text-align: center;
`;

const PaginationButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 15px;
  outline: none;
  background-color: var(--dark-blue);
  color: var(--light-gray);
  font-family: var(--main-font);
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;
