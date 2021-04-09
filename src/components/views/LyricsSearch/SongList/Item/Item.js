import React, { useContext } from 'react';
import { baseURL, LyricsContext } from '../../LyricsContext';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from 'styles/MyStyledComponents';

export default function Item({ artist, cover, preview, title }) {
  const {
    setSongInfo,
    setLyrics,
    setShouldRenderLyricsPanel,
    setShouldRenderSongList,
    setShouldShowLoader,
  } = useContext(LyricsContext);

  function handleGetLyricsClick() {
    setShouldShowLoader(true);
    const songInfo = {
      artist,
      cover,
      preview,
      title,
    };
    setSongInfo(songInfo);
    getLyrics(artist, title);
  }

  async function getLyrics(artist, title) {
    const res = await fetch(`${baseURL}/v1/${artist}/${title}`);
    const data = await res.json();
    console.log(data);
    setLyrics(data.lyrics);
    setShouldShowLoader(false);
    setShouldRenderSongList(false);
    setShouldRenderLyricsPanel(true);
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

const StyledButton = styled(Button)`
  padding: 0.5rem 1.5rem;
  border-radius: 15px;
  font-size: 1.2rem;
`;
