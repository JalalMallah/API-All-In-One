import React, { useContext } from 'react';
import { LyricsContext } from '../LyricsContext';

import { List } from 'styles/MyStyledComponents';

import Item from './Item/Item';

export default function SongList() {
  const { response } = useContext(LyricsContext);

  return (
    <>
      <List>
        {response.data.map(song => (
          <Item
            key={song.id}
            artist={song.artist.name}
            title={song.title}
            cover={song.album.cover_medium}
            preview={song.preview}
          />
        ))}
      </List>
    </>
  );
}
