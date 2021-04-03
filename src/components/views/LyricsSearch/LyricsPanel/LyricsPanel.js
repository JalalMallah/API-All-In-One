import React, { useContext, useEffect, useState } from 'react';
import { baseURL, LyricsContext } from '../LyricsContext';
import styled from 'styled-components';

import { Button } from 'styles/MyStyledComponents';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function LyricsPanel() {
  const [lyrics, setLyrics] = useState('');
  const { setShouldShowLoader, songInfo } = useContext(LyricsContext);

  useEffect(() => {
    setShouldShowLoader(true);
    getLyrics();
  }, []);

  async function getLyrics() {
    const { artist, title } = songInfo;
    const res = await fetch(`${baseURL}/v1/${artist}/${title}`);
    const data = await res.json();
    setLyrics(data.lyrics);
    setShouldShowLoader(false);
  }

  function renderLyricsPanel() {
    const { artist, cover, preview, title } = songInfo;

    return (
      <>
        <SongInfoContainer>
          <CoverContainer>
            <img src={cover} alt='album cover' />
          </CoverContainer>
          <SongInfo>
            <h2>{title}</h2>
            <h3>{artist}</h3>
            <SongPreviewButton as='a' href={preview} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faPlayCircle} /> Song Preview
            </SongPreviewButton>
          </SongInfo>
        </SongInfoContainer>
        <SongLyrics>{lyrics}</SongLyrics>
      </>
    );
  }

  return <>{lyrics && renderLyricsPanel()}</>;
}

const SongInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 3rem;
`;

const CoverContainer = styled.section`
  & img {
    width: 200px;

    @media (min-width: 768px) {
      width: 250px;
    }
  }
`;

const SongInfo = styled.section`
  flex-grow: 1;
  padding: 1rem 2rem;
  text-align: center;

  & h2 {
    margin: 0 0 0.5rem;
    font-size: 2.4rem;
  }

  & h3 {
    margin: 0 0 1.5rem;
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

const SongPreviewButton = styled(Button)`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border-radius: 15px;
  font-size: 1.4rem;
`;

const SongLyrics = styled.section`
  padding: 0 0 3rem;
  white-space: pre-wrap;
`;
