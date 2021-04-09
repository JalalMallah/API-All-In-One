import { createContext, useState } from 'react';

export const LyricsContext = createContext();

export const baseURL = 'https://api.lyrics.ovh';

export default function LyricsProvider({ children }) {
  const [response, setResponse] = useState('');
  const [songInfo, setSongInfo] = useState('');
  const [shouldShowLoader, setShouldShowLoader] = useState(false);
  const [lyrics, setLyrics] = useState('');
  const [shouldRenderSongList, setShouldRenderSongList] = useState(false);
  const [shouldRenderLyricsPanel, setShouldRenderLyricsPanel] = useState(false);

  const contextValues = {
    lyrics,
    setLyrics,
    response,
    setResponse,
    songInfo,
    setSongInfo,
    shouldShowLoader,
    setShouldShowLoader,
    shouldRenderSongList,
    setShouldRenderSongList,
    shouldRenderLyricsPanel,
    setShouldRenderLyricsPanel,
  };

  return <LyricsContext.Provider value={contextValues}>{children}</LyricsContext.Provider>;
}
