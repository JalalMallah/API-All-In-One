import React, { useContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { baseURL, LyricsContext } from './LyricsContext';

import { Title, Wrapper } from 'styles/MyStyledComponents';

import Loader from 'components/Loader/Loader';
import SearchForm from './SearchForm/SearchForm';
import SongList from './SongList/SongList';
import LyricsPanel from './LyricsPanel/LyricsPanel';

export default function LyricsSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const { response, setResponse, setShouldShowLoader, shouldShowLoader } = useContext(
    LyricsContext
  );

  function handleInputChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!searchTerm) return;

    searchSongs(searchTerm);
    setSearchTerm('');
    setShouldShowLoader(true);
  }

  async function searchSongs(term) {
    const res = await fetch(`${baseURL}/suggest/${term.trim()}`);
    const data = await res.json();

    setResponse(data);
    setShouldShowLoader(false);
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Wrapper>
        <Title>Find the lyrics for your favorite song! 🎵</Title>
        <SearchForm
          handleChange={handleInputChange}
          handleSubmit={handleFormSubmit}
          term={searchTerm}
        />
        {shouldShowLoader && <Loader />}
        <Route path='/lyrics-app' exact>
          {response && <SongList />}
        </Route>
        <Route path='/lyrics-app/lyrics-panel' exact>
          <LyricsPanel />
        </Route>
      </Wrapper>
    </BrowserRouter>
  );
}
