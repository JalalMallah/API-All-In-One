import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LyricsContext } from '../../LyricsContext';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function Item({ artist, cover, preview, title }) {
  const { setSongInfo } = useContext(LyricsContext);
  const history = useHistory();
  const location = {
    pathname: '/lyrics-app/lyrics-panel',
  };

  function handleGetLyricsClick() {
    history.push(location);
    const songInfo = {
      artist,
      cover,
      preview,
      title,
    };
    setSongInfo(songInfo);
  }

  return (
    <StyledItem>
      <span>
        {artist} - {title}
      </span>
      <StyledButton onClick={handleGetLyricsClick}>Get Lyrics</StyledButton>
    </StyledItem>
  );
}

Item.propTypes = {
  artist: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid var(--dark-blue);
  font-size: 1.5rem;

  & > span {
    flex-basis: 60%;
  }
`;

const StyledButton = styled.button`
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
