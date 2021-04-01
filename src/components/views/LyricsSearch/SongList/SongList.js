import React, { useContext } from 'react';
import { LyricsContext } from '../LyricsContext';
import styled from 'styled-components';

import Item from './Item/Item';
import Pagination from './Pagination/Pagination';

export default function SongList() {
  const { response } = useContext(LyricsContext);

  return (
    <>
      <StyledList>
        {response.data.map(song => (
          <Item
            key={song.id}
            artist={song.artist.name}
            title={song.title}
            cover={song.album.cover_medium}
            preview={song.preview}
          />
        ))}
      </StyledList>
      {(response.prev || response.next) && <Pagination />}
    </>
  );
}

const StyledList = styled.ul`
  width: 100%;
  max-width: 600px;
  list-style-type: none;
`;
